import { useEvidenceApi } from '../api/evidence'
import type { OcrResult } from '../types/ocr'

export function useOcrScanner() {
  const { scan } = useEvidenceApi()

  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const scanResult = ref<OcrResult | null>(null)

  const hasResult = computed(() => !!scanResult.value)

  async function processImage(file: File) {
    isLoading.value = true
    error.value = null

    try {
      const formData = new FormData()
      formData.append('image', file)
      scanResult.value = await scan(formData)
    } catch (err: any) {
      error.value = err?.data?.message ?? 'Error al procesar la imagen'
    } finally {
      isLoading.value = false
    }
  }

  function resetScanner() {
    scanResult.value = null
    error.value = null
    isLoading.value = false
  }

  return {
    isLoading: readonly(isLoading),
    error: readonly(error),
    scanResult: readonly(scanResult),
    hasResult,
    processImage,
    resetScanner,
  }
}