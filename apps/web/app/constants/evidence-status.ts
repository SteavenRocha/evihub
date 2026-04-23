export const EVIDENCE_STATUS = {
    AUTO_VERIFIED: {
        label: 'Verificado por IA',
        class: 'bg-amber-100 text-amber-900 dark:bg-amber-500/20 dark:text-amber-200'
    },
    MANUAL_REVIEW: {
        label: 'Verificado manualmente',
        class: 'bg-green-100 text-green-900 dark:bg-green-500/20 dark:text-green-200'
    },
    REJECTED: {
        label: 'Rechazado',
        class: 'bg-red-100 text-red-900 dark:bg-red-500/20 dark:text-red-200'
    },
} as const;

export type EvidenceStatus = keyof typeof EVIDENCE_STATUS;