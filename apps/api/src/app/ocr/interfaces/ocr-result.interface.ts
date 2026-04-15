export interface OcrResult {
    amount: number | null;
    currency: string | null;
    paymentDate: string | null;
    paymentTime: string | null;
    bank: string | null;
    reference: string | null;
    recipient: string | null;
    imageUrl: string | null;
    ocrRaw: string | null;
    isLegible: boolean | null;
}