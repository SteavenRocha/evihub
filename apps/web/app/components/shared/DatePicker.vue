<script setup lang="ts">
import type { DateValue } from '@internationalized/date'
import { DateFormatter, getLocalTimeZone, today, parseDate } from '@internationalized/date'
import { CalendarIcon } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
    Popover, PopoverContent, PopoverTrigger,
} from '@/components/ui/popover'

const model = defineModel<string>({ default: '' })

const defaultPlaceholder = today(getLocalTimeZone())
const date = ref<DateValue | undefined>()

const df = new DateFormatter('es-PE', {
    dateStyle: 'long',
})

function onDateSelect(val: DateValue | undefined, close: () => void) {
    if (!val) return
    date.value = val
    const d = val.toDate(getLocalTimeZone())
    const day = String(d.getDate()).padStart(2, '0')
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const year = d.getFullYear()
    model.value = `${day}-${month}-${year}`
    close()
}

watch(() => model.value, (val) => {
    if (!val) {
        date.value = undefined
        return
    }
    try {
        const [day, month, year] = val.split('-')
        date.value = parseDate(`${year}-${month}-${day}`)
    } catch {
        date.value = undefined
    }
}, { immediate: true })
</script>

<template>
    <Popover v-slot="{ close }">
        <PopoverTrigger as-child>
            <Button variant="outline"
                :class="cn('w-full justify-start text-left font-normal cursor-pointer', !date && 'text-muted-foreground')">
                <CalendarIcon class="mr-2 h-4 w-4" />
                {{ date ? df.format(date.toDate(getLocalTimeZone())) : "Seleccionar fecha" }}
            </Button>
        </PopoverTrigger>
        <PopoverContent class="w-auto p-0" align="start">
            <Calendar v-model="date" :default-placeholder="defaultPlaceholder" layout="month-and-year" initial-focus
                @update:model-value="onDateSelect($event, close)" />
        </PopoverContent>
    </Popover>
</template>