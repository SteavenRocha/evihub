<script setup lang="ts">
import { Upload, Camera, Save, RotateCcw, Loader2, AlertCircle, X } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import DatePicker from '@/components/shared/DatePicker.vue'
import TimePicker from '@/components/shared/TimePicker.vue'
import {
    Select, SelectContent, SelectItem,
    SelectTrigger, SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { PAYMENT_METHODS } from '~/constants/payment-methods'
import { CURRENCY } from '~/constants/currency'

definePageMeta({ layout: 'default' })
useHead({ title: 'Escanear comprobante | Evihub' })

const {
    isLoading,
    error,
    scanResult,
    hasResult,
    processImage,
    resetScanner,
} = useOcrScanner()

// --- File upload ---
const fileInput = ref<HTMLInputElement | null>(null)
const isDragging = ref(false)

// --- Cámara ---
const isCameraOpen = ref(false)
const videoRef = ref<HTMLVideoElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
const cameraInput = ref<HTMLInputElement | null>(null)
let stream: MediaStream | null = null

const isMobile = computed(() => {
    if (import.meta.server) return false
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
})

async function openCamera() {
    if (isMobile.value) {
        cameraInput.value?.click()
    } else {
        isCameraOpen.value = true
        await nextTick()
        try {
            stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'environment' }
            })
            if (videoRef.value) {
                videoRef.value.srcObject = stream
                videoRef.value.play()
            }
        } catch {
            isCameraOpen.value = false
        }
    }
}

function onCameraInputChange(e: Event) {
    const file = (e.target as HTMLInputElement).files?.[0]
    if (file) processImage(file)
}

function closeCamera() {
    stream?.getTracks().forEach(t => t.stop())
    stream = null
    isCameraOpen.value = false
}

async function capturePhoto() {
    if (!videoRef.value || !canvasRef.value) return

    const video = videoRef.value
    const canvas = canvasRef.value
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    canvas.getContext('2d')!.drawImage(video, 0, 0)

    canvas.toBlob(async (blob) => {
        if (!blob) return
        const file = new File([blob], `capture-${Date.now()}.jpg`, { type: 'image/jpeg' })
        closeCamera()
        await processImage(file)
    }, 'image/jpeg', 0.9)
}

// --- Form ---
const form = ref({
    amount: '',
    currency: '',
    paymentDate: '',
    paymentTime: '',
    paymentMethod: '',
    transactionNumber: '',
    recipient: '',
    description: '',
})

watch(scanResult, (result) => {
    if (!result) return
    form.value.amount = result.amount?.toString() ?? ''
    form.value.currency = result.currency ?? ''
    form.value.paymentDate = result.paymentDate ?? ''
    form.value.paymentTime = result.paymentTime ?? ''
    form.value.paymentMethod = result.paymentMethod ?? ''
    form.value.transactionNumber = result.transactionNumber ?? ''
    form.value.recipient = result.recipient ?? ''
})

function onFileInputChange(e: Event) {
    const file = (e.target as HTMLInputElement).files?.[0]
    if (file) processImage(file)
}

function onDrop(e: DragEvent) {
    e.preventDefault()
    isDragging.value = false
    const file = e.dataTransfer?.files[0]
    if (file) processImage(file)
}

function handleReset() {
    resetScanner()
    form.value = {
        amount: '', currency: '', paymentDate: '',
        paymentTime: '', paymentMethod: '', transactionNumber: '',
        recipient: '', description: '',
    }
    if (fileInput.value) fileInput.value.value = ''
    if (cameraInput.value) cameraInput.value.value = ''
}

async function handleSave() {
    // próximo paso
}

onUnmounted(() => {
    closeCamera()
})
</script>

<!--  <template #header>
        <span class="text-sm text-muted-foreground">Comprobantes</span>
        <span class="text-muted-foreground/40">/</span>
        <span class="text-sm font-medium">Escanear</span>
    </template> -->

<template>
    <div class="max-w-5xl mx-auto">
        <div class="mb-8">
            <h1 class="text-2xl font-semibold tracking-tight">Registrar comprobante</h1>
            <p class="text-sm text-muted-foreground mt-1">
                Sube o fotografía el comprobante para extraer los datos automáticamente.
            </p>
        </div>

        <Alert v-if="hasResult && !scanResult!.isLegible" variant="destructive" class="mb-4">
            <AlertCircle class="h-4 w-4" />
            <AlertDescription>
                El comprobante no es legible con claridad. Revisa los datos antes de guardar.
            </AlertDescription>
        </Alert>

        <Alert v-if="error" variant="destructive" class="mb-4">
            <AlertCircle class="h-4 w-4" />
            <AlertDescription>{{ error }}</AlertDescription>
        </Alert>

        <div class="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-4 items-start">
            <!-- LEFT -->
            <div class="border border-border rounded-lg">
                <div class="border-b border-border py-4 px-6">
                    <div class="flex items-center justify-between">
                        <div class="text-base font-medium">Comprobante de pago</div>
                        <Badge variant="outline"
                            class="text-[10px] gap-1.5 border-green-300 bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
                            <span class="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                            OCR activo
                        </Badge>
                    </div>
                </div>

                <input ref="cameraInput" type="file" accept="image/*" capture="environment" class="hidden"
                    @change="onCameraInputChange" />
                <input ref="fileInput" type="file" accept="image/*" class="hidden" @change="onFileInputChange" />

                <div class="space-y-4 p-6">
                    <!-- Estado: procesando -->
                    <div v-if="isLoading"
                        class="flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border bg-muted/30 h-52">
                        <Loader2 class="h-8 w-8 animate-spin text-muted-foreground" />
                        <div class="text-center">
                            <p class="text-sm font-medium">Procesando OCR...</p>
                            <p class="text-xs text-muted-foreground mt-0.5">Extrayendo datos del comprobante</p>
                        </div>
                    </div>

                    <!-- Estado: cámara abierta -->
                    <template v-else-if="isCameraOpen">
                        <div class="relative rounded-lg overflow-hidden border border-border bg-black">
                            <video ref="videoRef" class="w-full max-h-full object-cover" autoplay playsinline muted />
                            <canvas ref="canvasRef" class="hidden" />

                            <!-- Overlay guía -->
                            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div class="w-48 h-64 border-2 border-white/60 rounded-lg" />
                            </div>

                            <button
                                class="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 flex items-center justify-center text-white cursor-pointer"
                                @click="closeCamera">
                                <X class="h-3.5 w-3.5" />
                            </button>
                        </div>

                        <Button class="w-full gap-2 cursor-pointer" @click="capturePhoto">
                            <Camera class="h-4 w-4" />
                            Capturar foto
                        </Button>
                        <Button variant="outline" class="w-full cursor-pointer" @click="closeCamera">
                            Cancelar
                        </Button>
                    </template>

                    <!-- Estado: resultado -->
                    <template v-else-if="hasResult">
                        <div class="relative rounded-lg overflow-hidden border border-border bg-muted/20">
                            <img :src="scanResult!.imageUrl" alt="Comprobante escaneado"
                                class="w-full max-h-[500px] object-contain" />
                            <Badge
                                class="absolute top-2 right-2 text-[10px] bg-background/90 text-foreground border-border"
                                variant="outline">
                                {{ scanResult!.isLegible ? 'Legible' : 'Poco legible' }}
                            </Badge>
                        </div>

                        <Button variant="outline" class="w-full cursor-pointer" @click="handleReset">
                            <RotateCcw class="mr-2 h-4 w-4" />
                            Escanear de nuevo
                        </Button>
                    </template>

                    <!-- Estado: upload (default) -->
                    <template v-else>
                        <div :class="[
                            'flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed transition-all cursor-pointer h-52 text-center px-4',
                            isDragging
                                ? 'border-primary bg-primary/5'
                                : 'border-border hover:border-primary/50 hover:bg-muted/30'
                        ]" @click="fileInput?.click()" @dragover.prevent="isDragging = true"
                            @dragleave="isDragging = false" @drop="onDrop">
                            <div
                                class="w-10 h-10 rounded-lg bg-muted flex items-center justify-center border border-border">
                                <Upload class="h-5 w-5 text-muted-foreground" />
                            </div>
                            <div>
                                <p class="text-sm font-medium">Arrastra tu voucher aquí</p>
                                <p class="text-xs text-muted-foreground mt-0.5">o haz clic para seleccionar</p>
                            </div>
                            <div class="flex gap-1.5">
                                <span v-for="fmt in ['JPG', 'PNG', 'WEBP']" :key="fmt"
                                    class="text-[10px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border">
                                    {{ fmt }}
                                </span>
                            </div>
                        </div>

                        <!-- Solo visible en móvil -->
                        <template v-if="isMobile">
                            <div class="flex items-center gap-2">
                                <Separator class="flex-1" />
                                <span class="text-xs text-muted-foreground">o usa tu cámara</span>
                                <Separator class="flex-1" />
                            </div>

                            <Button variant="outline" class="w-full cursor-pointer" @click="openCamera">
                                <Camera class="mr-2 h-4 w-4" />
                                Tomar foto con el dispositivo
                            </Button>
                        </template>
                    </template>

                </div>
            </div>

            <!-- ── RIGHT: Form ── -->
            <div class="border border-border rounded-lg">
                <div class="border-b border-border py-4 px-6">
                    <div class="text-base font-medium">Datos del comprobante</div>
                </div>
                <div class="space-y-4 p-6">
                    <!-- Trasancion Number + Recipent -->
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div class="space-y-2">
                            <Label for="transactionNumber"
                                class="text-xs text-muted-foreground uppercase tracking-wide">N°
                                de
                                operación</Label>
                            <Input id="transactionNumber" v-model="form.transactionNumber" placeholder="Ej: 2853227" />
                        </div>

                        <div class="col-span-1 sm:col-span-2 space-y-2">
                            <Label for="recipient"
                                class="text-xs text-muted-foreground uppercase tracking-wide">Destinatario</Label>
                            <Input id="recipient" v-model="form.recipient" placeholder="Nombre del destinatario" />
                        </div>
                    </div>

                    <!-- Método de pago + Monto + Moneda -->
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <!-- Bank selector -->
                        <div class="space-y-2">
                            <Label class="text-xs text-muted-foreground uppercase tracking-wide">
                                Método de pago
                            </Label>
                            <Select v-model="form.paymentMethod">
                                <SelectTrigger class="w-full">
                                    <SelectValue placeholder="Selecciona un método" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem v-for="(b, id) in PAYMENT_METHODS" :key="id" :value="id">
                                        <div class="flex items-center gap-2">
                                            <span class="w-2 h-2 rounded-full shrink-0"
                                                :style="{ background: b?.color ?? '#888' }" />
                                            <span>{{ b?.name }}</span>
                                        </div>
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div class="space-y-2">
                            <Label for="amount"
                                class="text-xs text-muted-foreground uppercase tracking-wide">Monto</Label>
                            <div class="relative">
                                <Input id="amount" v-model="form.amount" type="number" step="0.01" min="0"
                                    placeholder="0.00" />
                            </div>
                        </div>

                        <div class="space-y-2">
                            <Label class="text-xs text-muted-foreground uppercase tracking-wide">Moneda</Label>
                            <Select v-model="form.currency">
                                <SelectTrigger class="w-full">
                                    <SelectValue placeholder="Selecciona una moneda" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem v-for="(b, id) in CURRENCY" :key="id" :value="id">
                                        <div class="flex items-center gap-2">
                                            <span>{{ b?.code }} — {{ b?.name }}</span>
                                        </div>
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <!-- Date + Time -->
                    <div class="grid grid-cols-2 gap-3">
                        <div class="space-y-2">
                            <Label for="paymentDate"
                                class="text-xs text-muted-foreground uppercase tracking-wide">Fecha</Label>
                            <DatePicker v-model="form.paymentDate" />
                        </div>
                        <div class="space-y-2">
                            <Label for="paymentTime"
                                class="text-xs text-muted-foreground uppercase tracking-wide">Hora</Label>
                            <TimePicker v-model="form.paymentTime" />
                        </div>
                    </div>

                    <!-- Description -->
                    <div class="space-y-2">
                        <Label for="description"
                            class="text-xs text-muted-foreground uppercase tracking-wide">Descripción
                            (opcional)</Label>
                        <Textarea id="description" v-model="form.description"
                            placeholder="Descripción del pago, servicio o producto..." class="resize-none h-24" />
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
                </div>
            </div>
        </div>
    </div>
</template>