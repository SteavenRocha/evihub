export const EVIDENCE_STATUS = {
    PENDING: {
        label: 'Pendiente',
        // Ámbar vibrante con borde definido
        class: 'bg-amber-100 text-amber-900 dark:bg-amber-500/20 dark:text-amber-200'
    },
    VERIFIED: {
        label: 'Verificado',
        // Verde lima/esmeralda eléctrico
        class: 'bg-green-100 text-green-900 dark:bg-green-500/20 dark:text-green-200'
    },
    REJECTED: {
        label: 'Rechazado',
        // Rojo carmesí intenso
        class: 'bg-red-100 text-red-900 dark:bg-red-500/20 dark:text-red-200'
    },
} as const;

export type EvidenceStatus = keyof typeof EVIDENCE_STATUS;