export const PAYMENT_METHODS = {
    BCP: {
        name: 'BCP',
        color: '#1a67b5'
    },
    YAPE: {
        name: 'Yape',
        color: '#6c2d8c'
    },
    PLIN: {
        name: 'Plin',
        color: '#00bcd4'
    },
    OTROS: {
        name: 'Otros',
        color: '#999'
    }
} as const;

export type PaymentMethod = keyof typeof PAYMENT_METHODS;