import { useEvidenceApi } from '../api/evidence'
import type { EvidenceFilters, Evidence } from '../types/evidence'
import type { PaginationMeta } from '../types/pagination'

export function useEvidence() {
    const { getAll, getImage } = useEvidenceApi()

    const isLoading = ref(false)
    const isLoadingImage = ref(false)
    const error = ref<string | null>(null)
    const items = ref<Evidence[]>([])
    const meta = ref<PaginationMeta | null>(null)
    const imageCache = ref<Record<string, string>>({})

    const filters = ref<EvidenceFilters>({
        status: undefined,
        paymentMethod: undefined,
        currency: undefined,
        paymentDateFrom: undefined,
        paymentDateTo: undefined,
        createdDateFrom: undefined,
        createdDateTo: undefined,
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

        const params = JSON.parse(JSON.stringify(filters.value, (key, value) => {
            if (key === "" && typeof value === 'object') return value

            if (value === 'all') return undefined

            return value
        }));

        try {
            const response = await getAll(params)
            items.value = response.data
            meta.value = response.meta
        } catch (err: any) {
            error.value = err?.data?.message ?? 'Error al cargar los comprobantes'
        } finally {
            isLoading.value = false
        }
    }

    async function resolveImage(imageKey: string): Promise<string | null> {
        if (!imageKey) return null

        // Si ya está en caché, devuelve la URL sin hacer fetch
        if (imageCache.value[imageKey]) return imageCache.value[imageKey]

        isLoadingImage.value = true
        try {
            const blob = await getImage(imageKey)
            const url = URL.createObjectURL(blob)
            imageCache.value[imageKey] = url
            return url
        } catch {
            return null
        } finally {
            isLoadingImage.value = false
        }
    }

    function applyFilters() {
        if (filters.value.paginationParams) {
            filters.value.paginationParams.page = 1;
        }
        fetchList()
    }

    function clearFilters(onClear?: () => void) {
        filters.value = {
            status: undefined,
            paymentMethod: undefined,
            currency: undefined,
            paymentDateFrom: undefined,
            paymentDateTo: undefined,
            createdDateFrom: undefined,
            createdDateTo: undefined,
            paginationParams: {
                page: 1,
                limit: 10,
                search: ''
            }
        }
        onClear?.()
        fetchList()
    }

    function goToPage(page: number) {
        if (page < 1 || page > totalPages.value) return

        if (filters.value.paginationParams) {
            filters.value.paginationParams.page = page
        }

        fetchList()
    }

    function dispose() {
        Object.values(imageCache.value).forEach(URL.revokeObjectURL)
        imageCache.value = {}
    }

    onUnmounted(dispose)

    return {
        isLoading: readonly(isLoading),
        isLoadingImage: readonly(isLoadingImage),
        error: readonly(error),
        items: readonly(items),
        meta: readonly(meta),
        filters,
        hasItems,
        totalPages,
        currentPage,
        fetchList,
        resolveImage,
        applyFilters,
        clearFilters,
        goToPage,
    }
}