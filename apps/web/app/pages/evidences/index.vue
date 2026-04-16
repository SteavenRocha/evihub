<script setup lang="ts">
import {
    Plus, Filter, X, Loader2,
    ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight,
    FileX, Eye,
} from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
    Select, SelectContent, SelectItem,
    SelectTrigger, SelectValue,
} from '@/components/ui/select'
import {
    Table, TableBody, TableCell,
    TableHead, TableHeader, TableRow,
} from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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

onMounted(fetchList)
</script>

<template>
    <div class="max-w-6xl mx-auto space-y-4">

        <!-- Header -->
        <div class="flex items-start justify-between">
            <div>
                <h1 class="text-lg font-medium tracking-tight">Comprobantes</h1>
                <p class="text-sm text-muted-foreground mt-0.5">
                    Administra y verifica los recibos de pago registrados.
                </p>
            </div>
            <Button as-child size="sm">
                <NuxtLink to="/evidences/scan">
                    <Plus class="mr-2 h-4 w-4" />
                    Nuevo pago
                </NuxtLink>
            </Button>
        </div>

        <!-- Filters -->
        <Card>
            <CardContent class="pt-4">
                <div class="flex flex-wrap items-end gap-3">
                    <div class="flex items-center gap-1.5 text-sm text-muted-foreground shrink-0">
                        <Filter class="h-3.5 w-3.5" />
                        Filtros:
                    </div>

                    <!-- Status -->
                    <div class="w-36">
                        <Select v-model="filters.status">
                            <SelectTrigger class="h-8 text-xs">
                                <SelectValue placeholder="Estado" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Todos</SelectItem>
                                <SelectItem value="PENDING">Pendiente</SelectItem>
                                <SelectItem value="VERIFIED">Verificado</SelectItem>
                                <SelectItem value="REJECTED">Rechazado</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <!-- Bank -->
                    <div class="w-36">
                        <Select v-model="filters.bank">
                            <SelectTrigger class="h-8 text-xs">
                                <SelectValue placeholder="Banco" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Todos</SelectItem>
                                <SelectItem v-for="b in banks" :key="b" :value="b">{{ b }}</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <!-- Date from -->
                    <div class="w-36">
                        <Input v-model="filters.dateFrom" type="date" class="h-8 text-xs" />
                    </div>

                    <!-- Date to -->
                    <div class="w-36">
                        <Input v-model="filters.dateTo" type="date" class="h-8 text-xs" />
                    </div>

                    <Button size="sm" class="h-8" @click="applyFilters">
                        Aplicar
                    </Button>

                    <Button size="sm" variant="ghost" class="h-8 text-muted-foreground" @click="clearFilters">
                        <X class="mr-1.5 h-3.5 w-3.5" />
                        Limpiar
                    </Button>
                </div>
            </CardContent>
        </Card>

        <!-- Table -->
        <Card>
            <CardContent class="p-0">

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
                        <TableHeader>
                            <TableRow class="text-xs">
                                <TableHead class="w-16">Recibo</TableHead>
                                <TableHead>Destinatario</TableHead>
                                <TableHead>Monto</TableHead>
                                <TableHead>Banco</TableHead>
                                <TableHead>Fecha pago</TableHead>
                                <TableHead>Registro</TableHead>
                                <TableHead>Estado</TableHead>
                                <TableHead class="text-right">Acción</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow v-for="item in items" :key="item.id" class="text-sm">
                                <!-- Thumbnail -->
                                <TableCell>
                                    <div
                                        class="w-10 h-10 rounded-md border border-border bg-muted overflow-hidden flex items-center justify-center">
                                        <img v-if="item.imageUrl" :src="item.imageUrl" :alt="item.reference"
                                            class="w-full h-full object-cover" />
                                        <span v-else class="text-[10px] text-muted-foreground font-mono">N/A</span>
                                    </div>
                                </TableCell>

                                <!-- Recipient -->
                                <TableCell>
                                    <p class="font-medium truncate max-w-[180px]">{{ item.recipient }}</p>
                                    <p class="text-xs text-muted-foreground font-mono">{{ item.reference }}</p>
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
                                <TableCell class="text-muted-foreground">
                                    {{ formatDate(item.paymentDate) }}
                                </TableCell>

                                <!-- Created at -->
                                <TableCell class="text-muted-foreground">
                                    {{ formatDate(item.createdAt) }}
                                </TableCell>

                                <!-- Status -->
                                <TableCell>
                                    <Badge variant="outline" :class="['text-[11px]', statusConfig[item.status]?.class]">
                                        {{ statusConfig[item.status]?.label }}
                                    </Badge>
                                </TableCell>

                                <!-- Action -->
                                <TableCell class="text-right">
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
                        <p class="text-xs text-muted-foreground">
                            Mostrando {{ items.length }} de {{ meta?.total ?? 0 }} registros
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

            </CardContent>
        </Card>

    </div>
</template>