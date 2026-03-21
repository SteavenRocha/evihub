export interface OcrResult {
    amount: number | null;
    currency: string | null;
    date: string | null;
    bank: string | null;
    reference: string | null;
    rawText: string;
}