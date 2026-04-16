<script setup lang="ts">
import { Upload, Camera, Save, RotateCcw, Loader2, AlertCircle } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
    Select, SelectContent, SelectItem,
    SelectTrigger, SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'

definePageMeta({ layout: 'default' })

const { isLoading, error, scanResult, hasResult, processImage, resetScanner } = useOcrScanner()

const fileInput = ref<HTMLInputElement | null>(null)
const isDragging = ref(false)

const banks = [
    { label: 'BCP', color: '#1a67b5' },
    { label: 'BBVA', color: '#004a97' },
    { label: 'Interbank', color: '#00a651' },
    { label: 'Scotiabank', color: '#8b1a1a' },
    { label: 'Yape', color: '#6c2d8c' },
    { label: 'Plin', color: '#00bcd4' },
    { label: 'BanBif', color: '#e65100' },
    { label: 'Pichincha', color: '#d32f2f' },
]

const form = ref({
    amount: '',
    currency: 'PEN',
    paymentDate: '',
    paymentTime: '',
    bank: '',
    reference: '',
    recipient: '',
    description: '',
})

// Rellena el formulario cuando el OCR devuelve datos
watch(scanResult, (result) => {
    if (!result) return
    form.value.amount = result.amount?.toString() ?? ''
    form.value.currency = result.currency ?? 'PEN'
    form.value.paymentDate = result.paymentDate ?? ''
    form.value.paymentTime = result.paymentTime ?? ''
    form.value.bank = result.bank ?? ''
    form.value.reference = result.reference ?? ''
    form.value.recipient = result.recipient ?? ''
})

async function handleFile(file: File) {
    await processImage(file)
}

function onFileInputChange(e: Event) {
    const file = (e.target as HTMLInputElement).files?.[0]
    if (file) handleFile(file)
}

function onDrop(e: DragEvent) {
    e.preventDefault()
    isDragging.value = false
    const file = e.dataTransfer?.files[0]
    if (file) handleFile(file)
}

function handleReset() {
    resetScanner()
    form.value = {
        amount: '', currency: 'PEN', paymentDate: '',
        paymentTime: '', bank: '', reference: '',
        recipient: '', description: '',
    }
    if (fileInput.value) fileInput.value.value = ''
}

async function handleSave() {
    // próximo paso: conectar con useEvidenceApi().create()
}
</script>

<template>
    <!--  <template #header>
        <span class="text-sm text-muted-foreground">Comprobantes</span>
        <span class="text-muted-foreground/40">/</span>
        <span class="text-sm font-medium">Escanear</span>
    </template> -->

    <div class="max-w-5xl mx-auto">
        <div class="mb-6">
            <h1 class="text-lg font-medium tracking-tight">Registrar comprobante</h1>
            <p class="text-sm text-muted-foreground mt-0.5">
                Sube o fotografía tu voucher para extraer los datos automáticamente.
            </p>
        </div>

        <!-- Alerta si OCR no pudo leer bien -->
        <Alert v-if="hasResult && !scanResult!.isLegible" variant="destructive" class="mb-4">
            <AlertCircle class="h-4 w-4" />
            <AlertDescription>
                El comprobante no es legible con claridad. Revisa los datos antes de guardar.
            </AlertDescription>
        </Alert>

        <!-- Error de red/servidor -->
        <Alert v-if="error" variant="destructive" class="mb-4">
            <AlertCircle class="h-4 w-4" />
            <AlertDescription>{{ error }}</AlertDescription>
        </Alert>

        <div class="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-4 items-start">

            <!-- ── LEFT: Form ── -->
            <Card>
                <CardHeader class="pb-3">
                    <CardTitle class="text-sm font-medium">Datos del pago</CardTitle>
                </CardHeader>
                <CardContent class="space-y-4">

                    <!-- Bank selector -->
                    <div class="space-y-2">
                        <Label class="text-xs text-muted-foreground uppercase tracking-wide">
                            Banco de origen
                        </Label>
                        <div class="grid grid-cols-4 gap-1.5">
                            <button v-for="bank in banks" :key="bank.label" type="button"
                                @click="form.bank = bank.label" :class="[
                                    'flex items-center gap-1.5 px-2 py-1.5 rounded-md border text-xs font-medium transition-all',
                                    form.bank === bank.label
                                        ? 'border-primary bg-primary/8 text-primary'
                                        : 'border-border bg-muted/40 text-muted-foreground hover:text-foreground'
                                ]">
                                <span class="w-2 h-2 rounded-full shrink-0" :style="{ background: bank.color }" />
                                {{ bank.label }}
                            </button>
                        </div>
                    </div>

                    <Separator />

                    <!-- Amount + Currency -->
                    <div class="grid grid-cols-2 gap-3">
                        <div class="space-y-1.5">
                            <Label for="amount">Monto</Label>
                            <div class="relative">
                                <span
                                    class="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-medium">
                                    S/
                                </span>
                                <Input id="amount" v-model="form.amount" type="number" step="0.01" min="0"
                                    placeholder="0.00" class="pl-8" />
                            </div>
                        </div>
                        <div class="space-y-1.5">
                            <Label>Moneda</Label>
                            <Select v-model="form.currency">
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="PEN">PEN — Soles</SelectItem>
                                    <SelectItem value="USD">USD — Dólares</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <!-- Date + Time -->
                    <div class="grid grid-cols-2 gap-3">
                        <div class="space-y-1.5">
                            <Label for="paymentDate">Fecha de pago</Label>
                            <Input id="paymentDate" v-model="form.paymentDate" type="text" placeholder="dd-mm-yyyy" />
                        </div>
                        <div class="space-y-1.5">
                            <Label for="paymentTime">Hora</Label>
                            <Input id="paymentTime" v-model="form.paymentTime" type="text" placeholder="00:00 a. m." />
                        </div>
                    </div>

                    <!-- Recipient -->
                    <div class="space-y-1.5">
                        <Label for="recipient">Destinatario</Label>
                        <Input id="recipient" v-model="form.recipient" placeholder="Nombre del destinatario" />
                    </div>

                    <!-- Reference -->
                    <div class="space-y-1.5">
                        <Label for="reference">N° de operación</Label>
                        <Input id="reference" v-model="form.reference" placeholder="Ej: 2853227" />
                    </div>

                    <!-- Description -->
                    <div class="space-y-1.5">
                        <Label for="description">Descripción (opcional)</Label>
                        <Textarea id="description" v-model="form.description"
                            placeholder="Referencia del pago, servicio o producto..." class="resize-none h-20" />
                    </div>

                    <!-- Actions -->
                    <div class="flex items-center justify-end gap-2 pt-1">
                        <Button variant="outline" @click="handleReset">
                            Cancelar
                        </Button>
                        <Button :disabled="!hasResult" @click="handleSave">
                            <Save class="mr-2 h-4 w-4" />
                            Guardar pago
                        </Button>
                    </div>

                </CardContent>
            </Card>

            <!-- ── RIGHT: Upload / Preview ── -->
            <Card>
                <CardHeader class="pb-3">
                    <div class="flex items-center justify-between">
                        <CardTitle class="text-sm font-medium">Comprobante de pago</CardTitle>
                        <Badge variant="outline"
                            class="text-[10px] gap-1.5 border-green-300 bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
                            <span class="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                            OCR activo
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent class="space-y-3">

                    <!-- Estado: procesando -->
                    <div v-if="isLoading"
                        class="flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border bg-muted/30 h-52">
                        <Loader2 class="h-8 w-8 animate-spin text-muted-foreground" />
                        <div class="text-center">
                            <p class="text-sm font-medium">Procesando OCR...</p>
                            <p class="text-xs text-muted-foreground mt-0.5">Extrayendo datos del comprobante</p>
                        </div>
                    </div>

                    <!-- Estado: resultado -->
                    <template v-else-if="hasResult">
                        <div class="relative rounded-lg overflow-hidden border border-border bg-muted/20">
                            <img :src="scanResult!.imageUrl" alt="Comprobante escaneado"
                                class="w-full max-h-56 object-contain" />
                            <Badge
                                class="absolute top-2 right-2 text-[10px] bg-background/90 text-foreground border-border"
                                variant="outline">
                                {{ scanResult!.isLegible ? 'Legible' : 'Poco legible' }}
                            </Badge>
                        </div>

                        <!-- OCR raw colapsado como detalle técnico -->
                        <details class="text-xs text-muted-foreground">
                            <summary class="cursor-pointer select-none hover:text-foreground transition-colors">
                                Ver texto extraído por OCR
                            </summary>
                            <p class="mt-2 font-mono bg-muted rounded-md p-2 break-all leading-relaxed">
                                {{ scanResult!.ocrRaw }}
                            </p>
                        </details>

                        <Button variant="outline" class="w-full" @click="handleReset">
                            <RotateCcw class="mr-2 h-4 w-4" />
                            Escanear de nuevo
                        </Button>
                    </template>

                    <!-- Estado: upload (default) -->
                    <template v-else>
                        <div :class="[
                            'flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed transition-all cursor-pointer h-44 text-center px-4',
                            isDragging
                                ? 'border-primary bg-primary/5'
                                : 'border-border hover:border-primary/50 hover:bg-muted/30'
                        ]" @click="fileInput?.click()" @dragover.prevent="isDragging = true"
                            @dragleave="isDragging = false" @drop="onDrop">
                            <input ref="fileInput" type="file" accept="image/*,.pdf" class="hidden"
                                @change="onFileInputChange" />
                            <div
                                class="w-10 h-10 rounded-lg bg-muted flex items-center justify-center border border-border">
                                <Upload class="h-5 w-5 text-muted-foreground" />
                            </div>
                            <div>
                                <p class="text-sm font-medium">Arrastra tu voucher aquí</p>
                                <p class="text-xs text-muted-foreground mt-0.5">o haz clic para seleccionar</p>
                            </div>
                            <div class="flex gap-1.5">
                                <span v-for="fmt in ['JPG', 'PNG', 'PDF', 'WEBP']" :key="fmt"
                                    class="text-[10px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border">
                                    {{ fmt }}
                                </span>
                            </div>
                        </div>

                        <div class="flex items-center gap-2">
                            <Separator class="flex-1" />
                            <span class="text-xs text-muted-foreground">o usa tu cámara</span>
                            <Separator class="flex-1" />
                        </div>

                        <Button variant="outline" class="w-full">
                            <Camera class="mr-2 h-4 w-4" />
                            Tomar foto con el dispositivo
                        </Button>
                    </template>

                </CardContent>
            </Card>
        </div>
    </div>
</template>