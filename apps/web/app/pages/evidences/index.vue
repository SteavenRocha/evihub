<script setup lang="ts">
import {
    Plus, Filter, X, Loader2, ImageOff,
    FileX, Eye, Landmark, DollarSign, Info, FileText, Download
} from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    Select, SelectContent, SelectItem,
    SelectTrigger, SelectValue,
} from '@/components/ui/select'
import {
    Table, TableBody, TableCell,
    TableHead, TableHeader, TableRow,
} from '@/components/ui/table'
import DateRangeFilter, { type DateRangeValue } from '@/components/shared/DateRangeFilter.vue'
import Pagination from '@/components/shared/Pagination.vue'
import {
    Dialog, DialogContent, DialogTitle, DialogDescription
} from '@/components/ui/dialog'
import { PAYMENT_METHODS } from '~/constants/payment-methods'
import { EVIDENCE_STATUS } from '~/constants/evidence-status'
import { CURRENCY } from '~/constants/currency'
import type { Evidence } from '~/types/evidence'

definePageMeta({ layout: 'default' })
useHead({ title: 'Comprobantes | Evihub' })

const {
    isLoading, isLoadingImage, error, items, meta,
    filters, hasItems, totalPages, currentPage,
    fetchList, resolveImage, applyFilters, clearFilters, goToPage,
} = useEvidence()

function formatDate(iso: string) {
    if (!iso) return '---';

    return new Date(iso).toLocaleString('es-PE', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    }).replace('.', '');
}

function formatAmount(amount: string, currency: string) {
    const symbol = currency === 'PEN' ? 'S/' : '$'
    return `${symbol} ${parseFloat(amount).toFixed(2)}`
}

function handleClearFilters() {
    clearFilters(() => {
        dateRange.value = null
    })
}

onMounted(fetchList)

/* Filters */
const dateRange = ref<DateRangeValue | null>(null)

watch(
    () => [filters.value.paymentMethod, filters.value.currency, filters.value.status],
    () => applyFilters()
)

watch(dateRange, (val) => {
    if (!val) {
        filters.value.paymentDateFrom = undefined
        filters.value.paymentDateTo = undefined
        filters.value.createdDateFrom = undefined
        filters.value.createdDateTo = undefined
    } else if (val.dateType === 'payment') {
        filters.value.paymentDateFrom = val.from
        filters.value.paymentDateTo = val.to
        filters.value.createdDateFrom = undefined
        filters.value.createdDateTo = undefined
    } else {
        filters.value.createdDateFrom = val.from
        filters.value.createdDateTo = val.to
        filters.value.paymentDateFrom = undefined
        filters.value.paymentDateTo = undefined
    }
    applyFilters()
})

/* Modal */
const isModalOpen = ref(false)
const selectedItem = ref<Evidence | null>(null)
const currentImage = ref<string | null>(null)

const openDetail = async (item: Evidence) => {
    selectedItem.value = item
    currentImage.value = null
    isModalOpen.value = true

    if (item.imageKey) {
        const url = await resolveImage(item.imageKey)
        currentImage.value = url
    }
}
</script>

<template>
    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
        <div>
            <h1 class="text-2xl font-semibold tracking-tight">Comprobantes</h1>
            <p class="text-sm text-muted-foreground mt-1">
                Administra y verifica los recibos de pago registrados.
            </p>
        </div>
        <Button as-child size="lg">
            <NuxtLink to="/evidences/scan">
                <Plus class="h-4 w-4" />
                Registrar comprobante
            </NuxtLink>
        </Button>
    </div>

    <!-- Filters -->
    <div class="flex flex-wrap items-center gap-3 mb-6">
        <div class="flex items-center gap-1.5 text-sm text-muted-foreground shrink-0">
            <Filter class="h-3.5 w-3.5" />
            Filtros:
        </div>

        <!-- paymentMethod -->
        <Select v-model="filters.paymentMethod">
            <SelectTrigger class="transition-colors hover:bg-accent group">
                <Landmark class="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />

                <div class="group-hover:text-accent-foreground">
                    <SelectValue placeholder="Método" />
                </div>
            </SelectTrigger>

            <SelectContent>
                <SelectItem value="all">
                    <div class="flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full shrink-0 bg-slate-400" />
                        <span>Todos los métodos</span>
                    </div>
                </SelectItem>

                <SelectItem v-for="(b, id) in PAYMENT_METHODS" :key="id" :value="id">
                    <div class="flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full shrink-0" :style="{ background: b?.color ?? '#888' }" />
                        <span>{{ b?.name }}</span>
                    </div>
                </SelectItem>
            </SelectContent>
        </Select>

        <!-- Currency -->
        <Select v-model="filters.currency">
            <SelectTrigger class="transition-colors hover:bg-accent group">
                <DollarSign class="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />

                <div class="group-hover:text-accent-foreground">
                    <SelectValue placeholder="Moneda" />
                </div>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">
                    <div class="flex items-center gap-2">
                        <span>Todos las monedas</span>
                    </div>
                </SelectItem>

                <SelectItem v-for="(b, id) in CURRENCY" :key="id" :value="id">
                    <div class="flex items-center gap-2">
                        <span>{{ b?.code }} — {{ b?.name }}</span>
                    </div>
                </SelectItem>
            </SelectContent>
        </Select>

        <!-- Status -->
        <Select v-model="filters.status">
            <SelectTrigger class="transition-colors hover:bg-accent group">
                <Info class="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />

                <div class="group-hover:text-accent-foreground">
                    <SelectValue placeholder="Estado" />
                </div>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="PENDING">Pendiente</SelectItem>
                <SelectItem value="VERIFIED">Verificado</SelectItem>
                <SelectItem value="REJECTED">Rechazado</SelectItem>
            </SelectContent>
        </Select>

        <!-- Date Filter -->
        <DateRangeFilter v-model="dateRange" />

        <Button size="sm" variant="ghost" class="h-9 text-muted-foreground" @click="handleClearFilters">
            <X class="h-3.5 w-3.5" />
            Limpiar filtros
        </Button>
    </div>

    <!-- Table -->
    <div class="border border-border rounded-lg overflow-clip">
        <!-- Loading -->
        <div v-if="isLoading" class="flex items-center justify-center h-52 gap-3">
            <Loader2 class="h-5 w-5 animate-spin text-muted-foreground" />
            <span class="text-sm text-muted-foreground">Cargando comprobantes...</span>
        </div>

        <!-- Empty -->
        <div v-else-if="!hasItems" class="flex flex-col items-center justify-center h-52 gap-2">
            <FileX class="h-8 w-8 text-muted-foreground/40" />
            <p class="text-sm font-medium">Sin comprobantes</p>
            <p class="text-xs text-muted-foreground">No se encontraron registros con los filtros aplicados.</p>
        </div>

        <!-- Data -->
        <template v-else>
            <div class="personalized-scroll overflow-y-auto max-h-[60vh]">
                <Table>
                    <TableHeader class="sticky top-0 z-10 bg-muted">
                        <TableRow>
                            <TableHead class="w-48">N° de operación</TableHead>
                            <TableHead>Monto</TableHead>
                            <TableHead>Método de pago</TableHead>
                            <TableHead>Fecha de pago</TableHead>
                            <TableHead>Fecha de registro</TableHead>
                            <TableHead>Estado</TableHead>
                            <TableHead></TableHead>
                            <!-- <TableHead>Acción</TableHead> -->
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow v-for="item in items" :key="item.id" class="text-sm">
                            <!-- Thumbnail -->
                            <TableCell class="flex items-center gap-4">
                                <!--  <div
                                class="w-10 h-10 rounded-md border border-border bg-white overflow-hidden flex items-center justify-center shrink-0">

                                <img v-if="banks[item.bank]?.urlImg" :src="banks[item.bank]?.urlImg"
                                    :alt="banks[item.bank]?.name" class="w-full h-full object-cover" />

                                <img v-else src="/assets/img/img-fallback.jpg" alt="Fallback Img"
                                    class="w-full h-full object-cover" />
                            </div> -->

                                <div class="flex flex-col">
                                    <p class="font-medium text-sm">{{ item.transactionNumber }}</p>
                                    <span class="text-[10px] text-muted-foreground uppercase">
                                        {{ PAYMENT_METHODS[item.paymentMethod]?.name ?? 'General' }}
                                    </span>
                                </div>
                            </TableCell>

                            <!-- Amount -->
                            <TableCell class="font-mono font-medium">
                                {{ formatAmount(item.amount, item.currency) }}
                            </TableCell>

                            <!-- Payment method -->
                            <TableCell>
                                <div class="flex items-center gap-1.5 capitalize">
                                    <span class="w-2 h-2 rounded-full shrink-0"
                                        :style="{ background: PAYMENT_METHODS[item.paymentMethod]?.color ?? '#888' }" />
                                    {{ PAYMENT_METHODS[item.paymentMethod]?.name ?? item.paymentMethod }}
                                </div>
                            </TableCell>

                            <!-- Payment date -->
                            <TableCell>
                                {{ formatDate(item.paymentDate) }}
                            </TableCell>

                            <!-- Created at -->
                            <TableCell>
                                {{ formatDate(item.createdAt) }}
                            </TableCell>

                            <!-- Status -->
                            <TableCell>
                                <Badge :class="['text-[11px]', EVIDENCE_STATUS[item.status]?.class]">
                                    {{ EVIDENCE_STATUS[item.status]?.label }}
                                </Badge>
                            </TableCell>

                            <!-- Action -->
                            <TableCell>
                                <Button variant="ghost" size="sm" class="text-xs h-7" @click="openDetail(item)">
                                    <Eye class="h-3.5 w-3.5" />
                                    Ver detalle
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

            <!-- Pagination -->
            <Pagination :current-page="currentPage" :total-pages="totalPages" :total-items="meta?.total ?? 0"
                :per-page="filters.paginationParams?.limit ?? 10" @update:page="goToPage" @update:per-page="(val) => {
                    filters.paginationParams!.limit = val
                    filters.paginationParams!.page = 1
                    fetchList()
                }" />

            <!-- Modal -->
            <Dialog v-model:open="isModalOpen">
                <DialogContent class="sm:max-w-[760px] w-[95vw] p-0 overflow-hidden gap-0">
                    <!-- Header -->
                    <div class="flex items-center justify-between px-6 py-4 border-b border-border/50">
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 rounded-md bg-muted flex items-center justify-center">
                                <FileText class="w-5 h-5" />
                            </div>
                            <div>
                                <DialogTitle class="text-base font-medium leading-none text-foreground">Detalle del
                                    comprobante
                                </DialogTitle>
                                <DialogDescription class="sr-only">
                                    Muestra los detalles completos, imagen y descripción del comprobante de pago
                                    seleccionado.
                                </DialogDescription>
                                <p class="text-xs text-muted-foreground mt-0.5">{{ selectedItem?.transactionNumber }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Body -->
                    <div v-if="selectedItem"
                        class="grid grid-cols-1 md:grid-cols-[300px_1fr] overflow-y-auto max-h-[80vh]">
                        <!-- Left: image panel -->
                        <div class="bg-muted/50 border-r border-border/50 flex flex-col p-5">
                            <div class="flex-1 flex items-center justify-center">
                                <div
                                    class="w-full h-full rounded-xl border border-dashed border-border flex flex-col items-center justify-center gap-2 bg-background">

                                    <div v-if="isLoadingImage" class="flex flex-col items-center gap-2">
                                        <Loader2 class="h-7 w-7 animate-spin text-primary" />
                                        <p class="text-xs text-muted-foreground">Obteniendo comprobante...</p>
                                    </div>

                                    <img v-else-if="currentImage" :src="currentImage"
                                        class="w-full h-full object-contain rounded-xl" />

                                    <template v-else>
                                        <ImageOff class="w-9 h-9 text-muted-foreground/30" />
                                        <p class="text-xs text-muted-foreground">Sin imagen disponible</p>
                                    </template>

                                </div>
                            </div>

                            <div class="mt-5">
                                <Button variant="outline" class="w-full gap-2">
                                    <Download class="w-3.5 h-3.5" />
                                    Descargar comprobante
                                </Button>
                            </div>
                        </div>

                        <!-- Right: details panel -->
                        <div class="flex flex-col p-5 gap-0">
                            <div class="bg-muted/50 rounded-xl p-5 flex items-center justify-between mb-6">
                                <div>
                                    <p class="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">
                                        Monto total</p>
                                    <p class="text-3xl font-medium tracking-tight text-foreground">
                                        {{ formatAmount(selectedItem.amount, selectedItem.currency) }}
                                    </p>
                                </div>
                                <div class="text-right">
                                    <Badge
                                        :class="['px-3 py-0.5 rounded-full text-[11px] font-medium uppercase tracking-wide', EVIDENCE_STATUS[selectedItem?.status]?.class]">
                                        {{ EVIDENCE_STATUS[selectedItem.status]?.label }}
                                    </Badge>
                                </div>
                            </div>

                            <!-- Fields grid -->
                            <div class="grid grid-cols-2 gap-x-6 gap-y-4">
                                <div>
                                    <p class="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">
                                        N° de operación</p>
                                    <p class="text-sm text-foreground">{{ selectedItem.transactionNumber }}</p>
                                </div>
                                <div>
                                    <p class="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">
                                        Método
                                    </p>
                                    <div class="flex items-center gap-2">
                                        <span class="w-2 h-2 rounded-full shrink-0"
                                            :style="{ background: PAYMENT_METHODS[selectedItem.paymentMethod]?.color ?? '#888' }" />
                                        <p class="text-sm text-foreground">
                                            {{ PAYMENT_METHODS[selectedItem.paymentMethod]?.name ??
                                                selectedItem.paymentMethod }}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p class="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">
                                        Fecha de pago</p>
                                    <p class="text-sm text-foreground">{{ formatDate(selectedItem.paymentDate) }}</p>
                                </div>
                                <div>
                                    <p class="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">
                                        Fecha de registro</p>
                                    <p class="text-sm text-foreground">{{ formatDate(selectedItem.createdAt) }}</p>
                                </div>
                            </div>

                            <!-- Description -->
                            <div class="mt-5 pt-4 border-t border-border/50">
                                <p class="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1.5">
                                    Descripción</p>
                                <p
                                    :class="['text-sm leading-relaxed', selectedItem.description ? 'text-foreground' : 'text-muted-foreground italic text-xs']">
                                    {{ selectedItem.description || 'Sin descripción' }}
                                </p>
                            </div>

                            <!-- Actions -->
                            <div class="mt-auto pt-6 flex justify-end">
                                <DialogClose as-child>
                                    <Button variant="secondary" class="w-auto">
                                        Cerrar
                                    </Button>
                                </DialogClose>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </template>
    </div>
</template>