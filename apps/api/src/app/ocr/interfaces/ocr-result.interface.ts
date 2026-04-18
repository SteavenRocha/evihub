export interface OcrResult {
    amount: number | null;
    currency: string | null;
    paymentDate: string | null;
    paymentTime: string | null;
    bank: string | null;
    reference: string | null;
    recipient: string | null;
    imageKey: string | null;
    ocrRaw: string | null;
    isLegible: boolean | null;
}