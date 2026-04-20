import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai';
import { OcrResult } from './interfaces/ocr-result.interface';

const SUPPORTED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp'] as const;
type SupportedMimeType = typeof SUPPORTED_MIME_TYPES[number];

@Injectable()
export class OcrService {
    private readonly logger = new Logger(OcrService.name);
    private readonly model;

    constructor(private config: ConfigService) {
        const apiKey = this.config.getOrThrow<string>('GEMINI_API_KEY');
        const genAI = new GoogleGenerativeAI(apiKey);

        this.model = genAI.getGenerativeModel({
            /* model: 'gemini-3.1-flash-lite-preview', */
            model: 'gemini-2.5-flash',
            generationConfig: {
                responseMimeType: 'application/json',
                responseSchema: {
                    type: SchemaType.OBJECT,
                    properties: {
                        amount: { type: SchemaType.NUMBER },
                        currency: { type: SchemaType.STRING },
                        paymentDate: { type: SchemaType.STRING },
                        paymentTime: { type: SchemaType.STRING },
                        bank: { type: SchemaType.STRING },
                        reference: { type: SchemaType.STRING },
                        recipient: { type: SchemaType.STRING },
                        ocrRaw: { type: SchemaType.STRING },
                        isLegible: { type: SchemaType.BOOLEAN },
                    },
                    required: ['amount', 'currency', 'paymentDate', 'paymentTime', 'bank', 'reference', 'recipient', 'ocrRaw', 'isLegible'],
                },
            },
        });
    }

    async extractFromImage(
        imageBuffer: Buffer,
        mimeType: SupportedMimeType = 'image/jpeg',
    ): Promise<OcrResult> {

        if (!SUPPORTED_MIME_TYPES.includes(mimeType)) {
            throw new BadRequestException(`Image type not supported: ${mimeType}`);
        }

        try {
            const prompt = `
                            Eres un sistema de auditoría financiera experto en medios de pago peruanos. 
                            Analiza este comprobante (Yape, Plin o transferencia) y extrae:

                            - amount: Monto numérico (ej: 15.00). Si hay "S/" o "Soles", solo extrae el número.
                            - currency: Siempre "PEN", a menos que el comprobante indique "USD" o "$" explícitamente.
                            - paymentDate: Fecha de la operación en formato DD-MM-YYYY (ej: 15-04-2026). No uses la fecha actual.
                            - paymentTime: Hora exacta de la operación tal cual aparece en la imagen (ej: "01:59 p. m.", "14:30:05", "11:20 am").
                            - bank: Nombre de la app emisora (ej: Yape, Plin, BCP).
                            - reference: Número de operación o ID de transacción completo.
                            - recipient: Nombre completo de la persona o empresa que recibe el dinero (el titular del destino).
                            - ocrRaw: Texto concatenado de los puntos clave detectados, separados por " | ". 
                                      Ejemplo: "amount: 50 | reference: 2853227 | bank: Yape | currency: PEN | paymentDate: 08-03-2026 | paymentTime: 01:59 p. m. | recipient: Juan Pérez".
                            - isLegible: false si la imagen es borrosa, recortada o falta algún campo requerido.
                            
                            Instrucciones críticas:
                            1. Si un dato no es 100% legible debido a borrosidad o luz, escribe "null" en lugar de adivinar.
                            2. Sé conservador: ante la duda, marca isLegible como false.
                            3. El (recipient) es el beneficiario. En Yape suele salir después de "¡Yapeaste a...!" o debajo del monto.
                            4. Elimina frases publicitarias o botones como "¡Yapeaste!", "Compartir" o "Ir a inicio".
                            5. El monto (amount) debe ser solo el número.
                            6. La (reference) es el número de operación. Es CRÍTICO para evitar fraudes.
                        `;

            const result = await this.model.generateContent([
                prompt,
                {
                    inlineData: {
                        data: imageBuffer.toString('base64'),
                        mimeType,
                    },
                },
            ]);

            const raw = result.response.text();
            const response = JSON.parse(raw) as OcrResult;

            if (!response.isLegible) {
                this.logger.warn('Receipt is not legible', {
                    reference: response.reference ?? 'N/A',
                });
            }

            return response;
        } catch (error: any) {
            if (error instanceof BadRequestException) throw error;

            this.logger.error('Error in Gemini OCR', {
                message: error?.message,
                code: error?.code,
                status: error?.status,
            });

            throw new InternalServerErrorException(
                'Error processing receipt. Please try again.',
            );
        }
    }
}