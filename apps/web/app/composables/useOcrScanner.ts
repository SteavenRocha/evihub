import { useEvidenceApi } from '../api/evidence'
import type { OcrResult } from '../types/ocr'

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
    imageFile.value = file

    try {
      const formData = new FormData()
      formData.append('image', file)

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