import { Currency } from "../constants/currency";
import { type PaymentMethod } from "../constants/payment-methods";

export type OcrResult = {
    amount: number | null;
    currency: Currency | null;
    paymentDate: string | null;
    paymentTime: string | null;
    paymentMethod: PaymentMethod | null;
    transactionNumber: string | null;
    recipient: string | null;
    ocrRaw: {
        detectedLanguage: string;
        rawText: string;
    };
    isLegible: boolean;
}