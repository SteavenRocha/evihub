import { useEvidenceApi } from '../api/evidence'
import type { EvidenceFilters, Evidence } from '../types/evidence'
import type { PaginationMeta } from '../types/pagination'

export function useEvidence() {
    const { getAll } = useEvidenceApi()

    const isLoading = ref(false)
    const error = ref<string | null>(null)
    const items = ref<Evidence[]>([])
    const meta = ref<PaginationMeta | null>(null)

    const filters = ref<EvidenceFilters>({
        status: undefined,
        bank: undefined,
        currency: undefined,
        dateFrom: undefined,
        dateTo: undefined,
        paginationParams: {
            page: 1,
            limit: 10,
            search: ''
        }
    })

    const hasItems = computed(() => items.value.length > 0)
    const totalPages = computed(() => meta.value?.lastPage ?? 1)
    const currentPage = computed(() => meta.value?.currentPage ?? 1)

    async function fetchList() {
        isLoading.value = true
        error.value = null
        try {
            const response = await getAll(filters.value)
            items.value = response.data
            meta.value = response.meta
        } catch (err: any) {
            error.value = err?.data?.message ?? 'Error al cargar los comprobantes'
        } finally {
            isLoading.value = false
        }
    }

    function applyFilters() {
        if (filters.value.paginationParams) {
            filters.value.paginationParams.page = 1;
        }
        fetchList()
    }

    function clearFilters() {
        filters.value = { status: undefined, bank: '', currency: '', dateFrom: '', dateTo: '', paginationParams: { page: 1, limit: 10, search: '' } }
        fetchList()
    }

    function goToPage(page: number) {
        if (page < 1 || page > totalPages.value) return

        if (filters.value.paginationParams) {
            filters.value.paginationParams.page = page
        }

        fetchList()
    }

    return {
        isLoading: readonly(isLoading),
        error: readonly(error),
        items: readonly(items),
        meta: readonly(meta),
        filters,
        hasItems,
        totalPages,
        currentPage,
        fetchList,
        applyFilters,
        clearFilters,
        goToPage,
    }
}