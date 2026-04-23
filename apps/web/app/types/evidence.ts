import type { PaginationParams } from "./pagination"
import { type EvidenceStatus } from "../constants/evidence-status"
import { type PaymentMethod } from "../constants/payment-methods"
import { type Currency } from "../constants/currency"

export type Evidence = {
    id: string
    accountId: string
    uploadedBy: string
    amount: string
    currency: Currency
    paymentDate: string
    paymentMethod: PaymentMethod
    transactionNumber: string
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
    paymentMethod?: PaymentMethod
    currency?: Currency
    paymentDateFrom?: string
    paymentDateTo?: string
    createdDateFrom?: string
    createdDateTo?: string
    paginationParams?: PaginationParams
}