<script setup lang="ts">
import {
    Plus, Filter, X, Loader2,
    ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight,
    FileX, Eye, Landmark, DollarSign, Info
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
import DatePicker from '@/components/shared/DatePicker.vue'
import type { EvidenceStatus } from '@/types/evidence'

definePageMeta({ layout: 'default' })

const {
    isLoading, error, items, meta,
    filters, hasItems, totalPages, currentPage,
    fetchList, applyFilters, clearFilters, goToPage,
} = useEvidence()

const banks = ['BCP', 'BBVA', 'Interbank', 'Scotiabank', 'Yape', 'Plin', 'BanBif', 'Pichincha']

const statusConfig: Record<EvidenceStatus, { label: string; class: string }> = {
    PENDING: { label: 'Pendiente', class: 'border-amber-300 bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300' },
    VERIFIED: { label: 'Verificado', class: 'border-green-300 bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300' },
    REJECTED: { label: 'Rechazado', class: 'border-red-300 bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300' },
}

const bankColors: Record<string, string> = {
    BCP: '#1a67b5', BBVA: '#004a97', Interbank: '#00a651',
    Scotiabank: '#8b1a1a', Yape: '#6c2d8c', Plin: '#00bcd4',
    BanBif: '#e65100', Pichincha: '#d32f2f',
}

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString('es-PE', {
        day: '2-digit', month: 'short', year: 'numeric',
    })
}

function formatAmount(amount: string, currency: string) {
    const symbol = currency === 'PEN' ? 'S/' : '$'
    return `${symbol} ${parseFloat(amount).toFixed(2)}`
}

// Páginas visibles en el paginador
const visiblePages = computed(() => {
    const total = totalPages.value
    const current = currentPage.value
    const delta = 1
    const pages: (number | '...')[] = []

    for (let i = 1; i <= total; i++) {
        if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
            pages.push(i)
        } else if (pages[pages.length - 1] !== '...') {
            pages.push('...')
        }
    }
    return pages
})

const from = computed(() => {
    if (!meta.value || meta.value.total === 0) return 0
    return (meta.value.currentPage - 1) * meta.value.perPage + 1
})

const to = computed(() => {
    if (!meta.value || meta.value.total === 0) return 0
    // Calculamos el límite superior teórico
    const upperLimit = meta.value.currentPage * meta.value.perPage
    // Nos aseguramos de no mostrar un número mayor al total de registros
    return upperLimit > meta.value.total ? meta.value.total : upperLimit
})

onMounted(fetchList)
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
                Registrar nuevo pago
            </NuxtLink>
        </Button>
    </div>

    <!-- Filters -->
    <div class="flex flex-wrap items-center gap-3 mb-6">
        <div class="flex items-center gap-1.5 text-sm text-muted-foreground shrink-0">
            <Filter class="h-3.5 w-3.5" />
            Filtros:
        </div>

        <!-- bank -->
        <Select v-model="filters.bank">
            <SelectTrigger class="transition-colors hover:bg-accent group">
                <Landmark class="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />

                <div class="group-hover:text-accent-foreground">
                    <SelectValue placeholder="Banco" />
                </div>
            </SelectTrigger>

            <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem v-for="b in banks" :key="b" :value="b">{{ b }}</SelectItem>
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
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="PEN">PEN (S/)</SelectItem>
                <SelectItem value="USD">USD ($)</SelectItem>
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

        <!-- Date from -->
        <DatePicker v-model="filters.dateFrom" />

        <!-- Date to -->
        <DatePicker v-model="filters.dateTo" />

        <Button size="sm" variant="ghost" class="h-9 text-muted-foreground cursor-pointer" @click="clearFilters">
            <X class="h-3.5 w-3.5" />
            Limpiar filtros
        </Button>
    </div>

    <!-- Table -->
    <div class="border border-border rounded-lg overflow-hidden">
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
            <Table>
                <TableHeader class="bg-muted">
                    <TableRow>
                        <TableHead class="w-48">Comprobante</TableHead>
                        <TableHead>Monto</TableHead>
                        <TableHead>Metodo de pago</TableHead>
                        <TableHead>Fecha pago</TableHead>
                        <TableHead>Fecha registro</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead></TableHead>
                        <!-- <TableHead>Acción</TableHead> -->
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="item in items" :key="item.id" class="text-sm">
                        <!-- Thumbnail -->
                        <TableCell class="flex items-center gap-4">
                            <div
                                class="w-10 h-10 rounded-md border border-border bg-muted overflow-hidden flex items-center justify-center">

                                <img v-if="item.imageUrl" :src="item.imageUrl" :alt="item.reference"
                                    class="w-full h-full object-cover" />
                                <span v-else class="text-[10px] text-muted-foreground font-mono">N/A</span>
                            </div>

                            <p class="text-muted-foreground">{{ item.reference }}</p>
                        </TableCell>

                        <!-- Amount -->
                        <TableCell class="font-mono font-medium">
                            {{ formatAmount(item.amount, item.currency) }}
                        </TableCell>

                        <!-- Bank -->
                        <TableCell>
                            <div class="flex items-center gap-1.5">
                                <span class="w-2 h-2 rounded-full shrink-0"
                                    :style="{ background: bankColors[item.bank] ?? '#888' }" />
                                {{ item.bank }}
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
                            <Badge variant="outline" :class="['text-[11px]', statusConfig[item.status]?.class]">
                                {{ statusConfig[item.status]?.label }}
                            </Badge>
                        </TableCell>

                        <!-- Action -->
                        <TableCell>
                            <Button variant="ghost" size="sm" as-child class="text-xs h-7">
                                <NuxtLink :to="`/evidences/${item.id}`">
                                    <Eye class="mr-1.5 h-3.5 w-3.5" />
                                    Ver detalle
                                </NuxtLink>
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <!-- Pagination -->
            <div class="flex items-center justify-between px-4 py-3 border-t border-border">
                <p v-if="meta?.total" class="text-sm text-muted-foreground">
                    Mostrando
                    <span class="font-medium text-foreground">{{ from }}</span>
                    -
                    <span class="font-medium text-foreground">{{ to }}</span>
                    de
                    <span class="font-medium text-foreground">{{ meta.total }}</span>
                    registros
                </p>
                <p v-else class="text-sm text-muted-foreground">
                    No hay registros para mostrar
                </p>

                <div class="flex items-center gap-1">
                    <Button variant="outline" size="icon" class="h-7 w-7" :disabled="currentPage === 1"
                        @click="goToPage(1)">
                        <ChevronsLeft class="h-3.5 w-3.5" />
                    </Button>
                    <Button variant="outline" size="icon" class="h-7 w-7" :disabled="currentPage === 1"
                        @click="goToPage(currentPage - 1)">
                        <ChevronLeft class="h-3.5 w-3.5" />
                    </Button>

                    <template v-for="page in visiblePages" :key="page">
                        <span v-if="page === '...'" class="px-1 text-xs text-muted-foreground">...</span>
                        <Button v-else :variant="page === currentPage ? 'default' : 'outline'" size="icon"
                            class="h-7 w-7 text-xs" @click="goToPage(page as number)">
                            {{ page }}
                        </Button>
                    </template>

                    <Button variant="outline" size="icon" class="h-7 w-7" :disabled="currentPage === totalPages"
                        @click="goToPage(currentPage + 1)">
                        <ChevronRight class="h-3.5 w-3.5" />
                    </Button>
                    <Button variant="outline" size="icon" class="h-7 w-7" :disabled="currentPage === totalPages"
                        @click="goToPage(totalPages)">
                        <ChevronsRight class="h-3.5 w-3.5" />
                    </Button>
                </div>
            </div>
        </template>
    </div>
</template>