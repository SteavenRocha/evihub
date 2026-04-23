<script setup lang="ts">
import { Clock } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

const model = defineModel<string>({ default: '' })

const hours = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'))
const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'))
const periods = ['a. m.', 'p. m.']

const selectedHour = ref<string | null>(null)
const selectedMinute = ref<string | null>(null)
const selectedPeriod = ref<string | null>(null)
const isOpen = ref(false)

function selectHour(h: string) {
    selectedHour.value = h
    tryClose()
}

function selectMinute(m: string) {
    selectedMinute.value = m
    tryClose()
}

function selectPeriod(p: string) {
    selectedPeriod.value = p
    tryClose()
}

function tryClose() {
    if (!selectedHour.value || !selectedMinute.value || !selectedPeriod.value) return
    model.value = `${selectedHour.value}:${selectedMinute.value} ${selectedPeriod.value}`
    isOpen.value = false
}

watch(() => model.value, (val) => {
    if (!val) {
        selectedHour.value = null
        selectedMinute.value = null
        selectedPeriod.value = null
        return
    }
    const match = val.match(/(\d{1,2}):(\d{2})\s*(a\.\s*m\.|p\.\s*m\.)/i)
    if (!match) return
    selectedHour.value = match[1].padStart(2, '0')
    selectedMinute.value = match[2]
    selectedPeriod.value = match[3].replace(/\s/g, ' ').toLowerCase().includes('p') ? 'p. m.' : 'a. m.'
}, { immediate: true })

const displayValue = computed(() => {
    if (!selectedHour.value || !selectedMinute.value || !selectedPeriod.value) return null
    return `${selectedHour.value}:${selectedMinute.value} ${selectedPeriod.value}`
})
</script>

<template>
    <Popover v-model:open="isOpen">
        <PopoverTrigger as-child>
            <Button variant="outline"
                :class="cn('w-full justify-start text-left font-normal cursor-pointer', !displayValue && 'text-muted-foreground')">
                <Clock class="mr-2 h-4 w-4" />
                {{ displayValue ?? 'Seleccionar hora' }}
            </Button>
        </PopoverTrigger>

        <PopoverContent class="w-56 p-3" align="start">
            <div class="flex gap-2">

                <!-- Horas -->
                <div class="flex flex-col gap-1 flex-1">
                    <p class="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1">Hora</p>
                    <div class="overflow-y-auto max-h-40 flex flex-col gap-0.5 hide-scrollbar">
                        <button v-for="h in hours" :key="h" :class="[
                            'text-xs px-2 py-1 rounded-md text-left transition-colors cursor-pointer',
                            selectedHour === h
                                ? 'bg-primary text-primary-foreground font-medium'
                                : 'hover:bg-muted text-foreground'
                        ]" @click="selectHour(h)">
                            {{ h }}
                        </button>
                    </div>
                </div>

                <!-- Minutos -->
                <div class="flex flex-col gap-1 flex-1">
                    <p class="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1">Min</p>
                    <div class="overflow-y-auto max-h-40 flex flex-col gap-0.5 hide-scrollbar">
                        <button v-for="m in minutes" :key="m" :class="[
                            'text-xs px-2 py-1 rounded-md text-left transition-colors cursor-pointer',
                            selectedMinute === m
                                ? 'bg-primary text-primary-foreground font-medium'
                                : 'hover:bg-muted text-foreground'
                        ]" @click="selectMinute(m)">
                            {{ m }}
                        </button>
                    </div>
                </div>

                <!-- AM/PM -->
                <div class="flex flex-col gap-1">
                    <p class="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1">Periodo
                    </p>
                    <div class="flex flex-col gap-0.5">
                        <button v-for="p in periods" :key="p" :class="[
                            'text-xs px-2 py-1 rounded-md text-left transition-colors cursor-pointer',
                            selectedPeriod === p
                                ? 'bg-primary text-primary-foreground font-medium'
                                : 'hover:bg-muted text-foreground'
                        ]" @click="selectPeriod(p)">
                            {{ p }}
                        </button>
                    </div>
                </div>

            </div>
        </PopoverContent>
    </Popover>
</template>

<style scoped>
.hide-scrollbar {
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.hide-scrollbar::-webkit-scrollbar {
    display: none;
}
</style>