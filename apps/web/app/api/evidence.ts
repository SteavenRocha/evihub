import type { Evidence, EvidenceFilters } from "../types/evidence"
import type { OcrResult } from "../types/ocr"
import type { PaginationResponse } from "../types/pagination"

export function useEvidenceApi() {
    const $api = useNuxtApp().$api as typeof $fetch

    return {
        scan: (body: FormData) =>
            $api<OcrResult>('/evidences/scan', {
                method: 'POST',
                body
            }),

        getAll(filters: EvidenceFilters = {}) {
            const { paginationParams, ...restOfFilters } = filters;

            return $api<PaginationResponse<Evidence>>(`/evidences`, {
                method: 'GET',
                query: {
                    ...restOfFilters,
                    page: paginationParams?.page ?? 1,
                    limit: paginationParams?.limit ?? 10,
                    search: paginationParams?.search ?? ''
                }
            })
        },

        getImage(imageKey: string) {
            return $api<Blob>(`/evidences/images/${imageKey}`, {
                method: 'GET',
                responseType: 'blob',
            })
        }
    }
}