<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import {
    Select, SelectContent, SelectItem,
    SelectTrigger, SelectValue,
} from '@/components/ui/select'

const props = defineProps<{
    currentPage: number
    totalPages: number
    totalItems: number
    perPage: number
}>()

const emit = defineEmits<{
    'update:page': [page: number]
    'update:perPage': [perPage: number]
}>()

const PER_PAGE_OPTIONS = [10, 25, 50, 100]

const from = computed(() => {
    if (props.totalItems === 0) return 0
    return (props.currentPage - 1) * props.perPage + 1
})

const to = computed(() => {
    if (props.totalItems === 0) return 0
    return Math.min(props.currentPage * props.perPage, props.totalItems)
})

const visiblePages = computed(() => {
    const total = props.totalPages
    const current = props.currentPage
    const pages: (number | '...')[] = []

    if (total <= 7) {
        return Array.from({ length: total }, (_, i) => i + 1)
    }

    pages.push(1)

    if (current > 3) pages.push('...')

    const start = Math.max(2, current - 1)
    const end = Math.min(total - 1, current + 1)

    for (let i = start; i <= end; i++) pages.push(i)

    if (current < total - 2) pages.push('...')

    pages.push(total)

    return pages
})
</script>

<template>
    <div class="flex items-center justify-between px-4 py-3 border-t border-border">
        <!-- Left: info + per page -->
        <div class="flex items-center gap-3">
            <p class="text-sm text-muted-foreground">
                <span v-if="totalItems > 0">
                    Mostrando
                    <span class="font-medium text-foreground">{{ from }} - {{ to }}</span>
                    de
                    <span class="font-medium text-foreground">{{ totalItems }}</span>
                    registros
                </span>
                <span v-else>Sin registros</span>
            </p>

            <Select :default-value="String(perPage)" @update:modelValue="emit('update:perPage', Number($event))">
                <SelectTrigger class="h-7 w-28 text-xs transition-colors hover:bg-accent">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem v-for="opt in PER_PAGE_OPTIONS" :key="opt" :value="String(opt)">
                        {{ opt }} / pág
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>

        <!-- Right: page controls -->
        <div class="flex items-center gap-1">
            <!-- Prev -->
            <button :disabled="currentPage === 1"
                class="h-7 w-7 flex items-center justify-center rounded-md border border-border/60 text-muted-foreground transition-colors hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                @click="emit('update:page', currentPage - 1)">
                <ChevronLeft class="h-3.5 w-3.5" />
            </button>

            <!-- Pages -->
            <template v-for="page in visiblePages" :key="page">
                <span v-if="page === '...'"
                    class="h-7 w-7 flex items-center justify-center text-xs text-muted-foreground select-none">
                    ···
                </span>
                <button v-else :class="[
                    'h-7 w-7 flex items-center justify-center rounded-md text-xs transition-colors cursor-pointer',
                    page === currentPage
                        ? 'bg-primary text-primary-foreground font-medium'
                        : 'border border-border/60 text-foreground hover:bg-muted'
                ]" @click="emit('update:page', page as number)">
                    {{ page }}
                </button>
            </template>

            <!-- Next -->
            <button :disabled="currentPage === totalPages"
                class="h-7 w-7 flex items-center justify-center rounded-md border border-border/60 text-muted-foreground transition-colors hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                @click="emit('update:page', currentPage + 1)">
                <ChevronRight class="h-3.5 w-3.5" />
            </button>
        </div>

    </div>
</template>