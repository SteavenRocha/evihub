import type { PaginationParams } from "./pagination"

export type EvidenceStatus = 'PENDING' | 'VERIFIED' | 'REJECTED'

export type Evidence = {
    id: string
    accountId: string
    uploadedBy: string
    amount: string
    currency: string
    paymentDate: string
    bank: string
    reference: string
    recipient: string
    isLegible: boolean
    imageUrl: string
    ocrRaw: string
    status: EvidenceStatus
    description: string | null
    createdAt: string
    updatedAt: string
    deletedAt: string | null
}

export type EvidenceFilters = {
    status?: EvidenceStatus
    bank?: string
    currency?: string
    dateFrom?: string
    dateTo?: string
    paginationParams?: PaginationParams
}