import { useEvidenceApi } from '../api/evidence'
import type { OcrResult } from '../types/ocr'
import imageCompression from 'browser-image-compression'

async function compressImage(file: File): Promise<File> {
  if (file.size < 1024 * 1024) return file

  return await imageCompression(file, {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
    fileType: 'image/jpeg',
  })
}

export function useOcrScanner() {
  const { scan } = useEvidenceApi()

  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const scanResult = ref<(OcrResult & { imageUrl: string }) | null>(null)
  const imageFile = ref<File | null>(null)

  const hasResult = computed(() => !!scanResult.value)

  async function processImage(file: File) {
    isLoading.value = true
    error.value = null
    scanResult.value = null

    try {
      const compressed = await compressImage(file)
      imageFile.value = compressed

      const formData = new FormData()
      formData.append('image', compressed)

      const result = await scan(formData)

      scanResult.value = {
        ...result,
        imageUrl: URL.createObjectURL(file),
      }
    } catch (err: any) {
      error.value = err?.data?.message ?? 'Error al procesar el comprobante'
      imageFile.value = null
    } finally {
      isLoading.value = false
    }
  }

  function resetScanner() {
    if (scanResult.value?.imageUrl) {
      URL.revokeObjectURL(scanResult.value.imageUrl)
    }
    scanResult.value = null
    imageFile.value = null
    error.value = null
  }

  onUnmounted(resetScanner)

  return {
    isLoading: readonly(isLoading),
    error: readonly(error),
    scanResult: readonly(scanResult),
    imageFile: readonly(imageFile),
    hasResult,
    processImage,
    resetScanner,
  }
}