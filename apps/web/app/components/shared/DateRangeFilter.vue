<script setup lang="ts">
import { Calendar, ChevronDown, X } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
    Popover, PopoverContent, PopoverTrigger,
} from '@/components/ui/popover'

export interface DateRangeValue {
    dateType: 'payment' | 'created'
    from: string
    to: string
}

const props = defineProps<{
    modelValue: DateRangeValue | null
}>()

const emit = defineEmits<{
    'update:modelValue': [value: DateRangeValue | null]
}>()

const isOpen = ref(false)
const dateType = ref<'payment' | 'created'>('payment')
const from = ref('')
const to = ref('')

const presets = [
    {
        label: 'Hoy',
        apply: () => {
            const today = toDateString(new Date())
            from.value = today
            to.value = today
        }
    },
    {
        label: 'Esta semana',
        apply: () => {
            const now = new Date()
            const day = now.getDay()
            const diffToMonday = (day === 0 ? -6 : 1 - day)
            const monday = new Date(now)
            monday.setDate(now.getDate() + diffToMonday)
            from.value = toDateString(monday)
            to.value = toDateString(now)
        }
    },
    {
        label: 'Este mes',
        apply: () => {
            const now = new Date()
            from.value = toDateString(new Date(now.getFullYear(), now.getMonth(), 1))
            to.value = toDateString(now)
        }
    },
    {
        label: 'Este año',
        apply: () => {
            const now = new Date()
            from.value = toDateString(new Date(now.getFullYear(), 0, 1))
            to.value = toDateString(now)
        }
    },
]

function toDateString(date: Date): string {
    return date.toISOString().split('T')[0] ?? ''
}

function applyPreset(preset: typeof presets[0]) {
    preset.apply()
    apply()
}

function apply() {
    if (!from.value || !to.value) return
    emit('update:modelValue', {
        dateType: dateType.value,
        from: from.value,
        to: to.value,
    })
    isOpen.value = false
}

function clear() {
    from.value = ''
    to.value = ''
    emit('update:modelValue', null)
    isOpen.value = false
}

// Label que se muestra en el trigger
const triggerLabel = computed(() => {
    if (!props.modelValue) return null
    const typeLabel = props.modelValue.dateType === 'payment' ? 'Pago' : 'Registro'
    const f = formatShort(props.modelValue.from)
    const t = formatShort(props.modelValue.to)
    return f === t ? `${typeLabel}: ${f}` : `${typeLabel}: ${f} → ${t}`
})

function formatShort(iso: string): string {
    return new Date(iso + 'T00:00:00').toLocaleDateString('es-PE', {
        day: '2-digit',
        month: 'short',
    })
}

// Sync interno cuando cambia el modelValue desde fuera (ej. clearFilters)
watch(() => props.modelValue, (val) => {
    if (!val) {
        from.value = ''
        to.value = ''
        dateType.value = 'payment'
    }
})
</script>

<template>
    <Popover v-model:open="isOpen">
        <PopoverTrigger as-child>
            <Button variant="outline" :class="[
                'h-9 gap-2 text-sm transition-colors cursor-pointer font-normal',
                modelValue
                    ? 'border-primary/40 bg-primary/5 text-primary hover:bg-primary/10'
                    : 'text-muted-foreground hover:bg-accent'
            ]">
                <Calendar class="h-3.5 w-3.5 shrink-0" />
                <span> {{ triggerLabel ?? 'Fecha' }}</span>
                <ChevronDown class="h-3 w-3 opacity-50 shrink-0" />
            </Button>
        </PopoverTrigger>

        <PopoverContent class="w-72 p-0" align="start">

            <!-- Tabs: tipo de fecha -->
            <div class="px-3 pt-3">
                <Tabs v-model="dateType">
                    <TabsList class="w-full">
                        <TabsTrigger value="payment" class="flex-1 text-xs cursor-pointer">
                            Fecha de pago
                        </TabsTrigger>
                        <TabsTrigger value="created" class="flex-1 text-xs cursor-pointer">
                            Fecha de registro
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>

            <!-- Presets -->
            <div class="px-3 pt-3">
                <p class="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-2">
                    Acceso rápido
                </p>
                <div class="grid grid-cols-2 gap-1.5">
                    <button v-for="preset in presets" :key="preset.label"
                        class="text-xs h-8 rounded-md border border-border/50 hover:bg-muted transition-colors px-2 text-left text-foreground cursor-pointer"
                        @click="applyPreset(preset)">
                        {{ preset.label }}
                    </button>
                </div>
            </div>

            <!-- Rango personalizado -->
            <div class="px-3 pt-3 pb-3">
                <p class="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-2">
                    Rango personalizado
                </p>
                <div class="flex flex-col gap-2">
                    <div class="flex flex-col gap-1">
                        <label class="text-xs text-muted-foreground">Desde</label>
                        <input v-model="from" type="date" :max="to || undefined"
                            class="w-full h-8 rounded-md border border-border/50 bg-background px-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring cursor-pointer" />
                    </div>
                    <div class="flex flex-col gap-1">
                        <label class="text-xs text-muted-foreground">Hasta</label>
                        <input v-model="to" type="date" :min="from || undefined"
                            class="w-full h-8 rounded-md border border-border/50 bg-background px-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring cursor-pointer" />
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <div class="flex items-center justify-between px-3 py-2.5 border-t border-border/50">
                <button
                    class="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer transition-colors"
                    @click="clear">
                    <X class="h-3 w-3" />
                    Limpiar
                </button>
                <Button size="sm" class="h-7 text-xs" :disabled="!from || !to" @click="apply">
                    Aplicar
                </Button>
            </div>

        </PopoverContent>
    </Popover>
</template>