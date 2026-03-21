import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as vision from '@google-cloud/vision';
import { OcrResult } from './interfaces/ocr-result.interface';

@Injectable()
export class OcrService {
    private readonly logger = new Logger(OcrService.name);
    private client: vision.ImageAnnotatorClient;

    constructor(private config: ConfigService) {
        this.client = new vision.ImageAnnotatorClient({
            apiKey: this.config.getOrThrow<string>('GOOGLE_CLOUD_VISION_API_KEY'),
        });
    }

    async extractFromImage(imageBuffer: Buffer): Promise<OcrResult> {
        try {
            const [result] = await this.client.documentTextDetection({
                image: { content: imageBuffer.toString('base64') },
            });

            const rawText = result.fullTextAnnotation?.text ?? '';

            if (!rawText) {
                this.logger.warn('No text detected in image');
                return this.emptyResult();
            }

            return this.parsePaymentData(rawText);
        } catch (error) {
            this.logger.error('Error calling Google Cloud Vision', error);
            throw new InternalServerErrorException('Error processing image');
        }
    }

    private parsePaymentData(text: string): OcrResult {
        return {
            amount: this.extractAmount(text),
            currency: this.extractCurrency(text),
            date: this.extractDate(text),
            bank: this.extractBank(text),
            reference: this.extractReference(text),
            rawText: text,
        };
    }

    private extractAmount(text: string): number | null {
        const patterns = [
            /S\/[\s.]*([\d,]+\.?\d{0,2})/i,
            /monto[:\s]*([\d,]+\.?\d{0,2})/i,
            /importe[:\s]*([\d,]+\.?\d{0,2})/i,
            /total[:\s]*([\d,]+\.?\d{0,2})/i,
        ];

        for (const pattern of patterns) {
            const match = text.match(pattern);
            if (match) {
                return parseFloat(match[1].replace(',', ''));
            }
        }
        return null;
    }

    private extractCurrency(text: string): string | null {
        if (/S\/|soles|PEN/i.test(text)) return 'PEN';
        if (/USD|\$|dólares/i.test(text)) return 'USD';
        return null;
    }

    /* private extractDate(text: string): string | null {
        const patterns = [
            /(\d{2})[\/\-](\d{2})[\/\-](\d{4})/,
            /(\d{2})[\/\-](\d{2})[\/\-](\d{2})/,
        ];

        for (const pattern of patterns) {
            const match = text.match(pattern);
            if (match) return match[0];
        }
        return null;
    } */

    private extractBank(text: string): string | null {
        const banks: Record<string, RegExp> = {
            'BCP': /BCP|banco de crédito/i,
            'BBVA': /BBVA/i,
            'Interbank': /interbank/i,
            'Scotiabank': /scotiabank/i,
            'Yape': /yape/i,
            'Plin': /plin/i,
            'BanBif': /banbif/i,
            'Pichincha': /pichincha/i,
        };

        for (const [bank, pattern] of Object.entries(banks)) {
            if (pattern.test(text)) return bank;
        }
        return null;
    }

    private extractDate(text: string): string | null {
        const months: Record<string, string> = {
            'ene': '01', 'feb': '02', 'mar': '03', 'abr': '04',
            'may': '05', 'jun': '06', 'jul': '07', 'ago': '08',
            'set': '09', 'sep': '09', 'oct': '10', 'nov': '11', 'dic': '12',
        };

        const spanishMatch = text.match(/(\d{1,2})\s+(ene|feb|mar|abr|may|jun|jul|ago|set|sep|oct|nov|dic)\.?\s+(\d{4})/i);
        if (spanishMatch) {
            const day = spanishMatch[1].padStart(2, '0');
            const month = months[spanishMatch[2].toLowerCase()];
            const year = spanishMatch[3];
            return `${year}-${month}-${day}`;
        }

        const numericMatch = text.match(/(\d{2})[\/\-](\d{2})[\/\-](\d{4})/);
        if (numericMatch) return numericMatch[0];

        return null;
    }

    private extractReference(text: string): string | null {
        const patterns = [
            /n[°º]?\s*operaci[oó]n[:\s]*([A-Z0-9\-]+)/i,
            /operaci[oó]n[:\s]*([A-Z0-9\-]+)/i,
            /referencia[:\s]*([A-Z0-9\-]+)/i,
            /c[oó]digo[:\s]*([A-Z0-9\-]+)/i,
            /n[°º]?\s*transacci[oó]n[:\s]*([A-Z0-9\-]+)/i,
        ];

        for (const pattern of patterns) {
            const match = text.match(pattern);
            if (match) return match[1];
        }
        return null;
    }

    private emptyResult(): OcrResult {
        return {
            amount: null,
            currency: null,
            date: null,
            bank: null,
            reference: null,
            rawText: '',
        };
    }
}