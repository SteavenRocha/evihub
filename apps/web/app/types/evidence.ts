import type { PaginationParams } from "./pagination"
import { type EvidenceStatus } from "../constants/evidence_status"

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
    imageKey: string
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
    paymentDateFrom?: string
    paymentDateTo?: string
    createdDateFrom?: string
    createdDateTo?: string
    paginationParams?: PaginationParams
}