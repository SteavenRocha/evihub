export type PaginationParams = {
    page?: number
    limit?: number
    search?: string
}

export type PaginationMeta = {
    total: number
    currentPage: number
    perPage: number
    lastPage: number
    next: number | null
    prev: number | null
}

export type PaginationResponse<T> = {
    data: T[]
    meta: PaginationMeta
}