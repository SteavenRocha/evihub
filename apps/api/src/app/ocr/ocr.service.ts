import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai';
import { OcrResult } from './interfaces/ocr-result.interface';
import { VALID_MIME_TYPES, type ValidMimeType } from '../common/constants/mime-types.constant'

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
                        paymentMethod: { type: SchemaType.STRING },
                        transactionNumber: { type: SchemaType.STRING },
                        recipient: { type: SchemaType.STRING },
                        isLegible: { type: SchemaType.BOOLEAN },
                        ocrRaw: { type: SchemaType.STRING },
                    },
                    required: ['amount', 'currency', 'paymentDate', 'paymentTime', 'paymentMethod', 'transactionNumber', 'recipient', 'ocrRaw', 'isLegible'],
                },
            },
        });
    }

    async extractFromImage(
        imageBuffer: Buffer,
        mimeType: ValidMimeType
    ): Promise<OcrResult> {

        if (!VALID_MIME_TYPES.includes(mimeType)) {
            throw new BadRequestException(`Image type not supported: ${mimeType}`);
        }

        try {
            const prompt = `
                            Eres un sistema de auditoría financiera experto en medios de pago peruanos. 
                            Analiza este comprobante (Yape, Plin o transferencia) y extrae:

                            - amount: Monto numérico (ej: 15.00). Si hay "S/" o "Soles", solo extrae el número.
                            - currency: Siempre "PEN", a menos que el comprobante indique "USD" o "$" explícitamente.
                            - paymentDate: Fecha de la operación en formato DD-MM-YYYY (ej: 15-04-2026). No uses la fecha actual.
                            - paymentTime: Hora exacta de la operación en formato 12h con período en español (ej: "01:59 p. m.", "02:12 p. m.").
                            - paymentMethod: Nombre de la app emisora en mayúsculas (ej: YAPE, PLIN, BCP), si no puedes identificar la app emisora, pon "OTROS".
                            - transactionNumber: Número de operación o ID de transacción completo.
                            - recipient: Nombre completo de la persona o empresa que recibe el dinero (el titular del destino).
                            - ocrRaw: Todo el texto detectado en la imagen.
                            - isLegible: false si la imagen es borrosa, recortada o falta algún campo requerido.
                            
                            Instrucciones críticas:
                            1. Si un dato no es 100% legible debido a borrosidad o luz, escribe "null" en lugar de adivinar.
                            2. Sé conservador: ante la duda, marca isLegible como false.
                            3. El monto (amount) debe ser solo el número.
                            4. En el (paymentTime), si la imagen muestra formato 24h (ej: 14:12), conviértelo a 12h con período antes de responder.
                            5. El (recipient) es el beneficiario. En Yape suele salir después de "¡Yapeaste a...!" o debajo del monto.
                            6. Para los datos principales NO incluyas frases publicitarias o botones como "¡Yapeaste!", "Compartir" o "Ir a inicio".
                            7. El (transactionNumber) es el número de operación. Es CRÍTICO para evitar fraudes.
                            8. En (ocrRaw) incluye TODO el texto que logres leer, incluso el que no uses en los campos principales.
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