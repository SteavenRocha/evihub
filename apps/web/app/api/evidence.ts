import type { OcrResult } from "../types/ocr"

export function useEvidenceApi() {
    const $api = useNuxtApp().$api as typeof $fetch

    return {
        scan: (body: FormData) =>
            $api<OcrResult>('/evidences/scan', { method: 'POST', body }),
    }
}