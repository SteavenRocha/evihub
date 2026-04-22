export interface OcrResult {
    amount: number | null;
    currency: string | null;
    paymentDate: string | null;
    paymentTime: string | null;
    bank: string | null;
    reference: string | null;
    recipient: string | null;
    ocrRaw: {
        rawText: string | null;
        detectedLanguage: string | null;
    } | null;
    isLegible: boolean | null;
}