export type OcrResult = {
    amount: number | null;
    currency: string | null;
    paymentDate: string | null;
    paymentTime: string | null;
    bank: string | null;
    reference: string | null;
    recipient: string | null;
    ocrRaw: string;
    isLegible: boolean;
    imageUrl: string;
}