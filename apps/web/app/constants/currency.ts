export const CURRENCY = {
    PEN: {
        code: 'PEN',
        name: 'Soles',
        symbol: 'S/'
    },
    USD: {
        code: 'USD',
        name: 'Dólares',
        symbol: '$'
    },
} as const;

export type Currency = keyof typeof CURRENCY;