import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { PaymentMethod, EvidenceStatus, Currency } from '@evihub/db';

export class CreateEvidenceDto {
    @IsNumber()
    @IsNotEmpty()
    @Type(() => Number)
    amount!: number;

    @IsEnum(Currency)
    @IsNotEmpty()
    currency!: Currency;

    @IsString()
    @IsNotEmpty()
    paymentDate!: string;

    @IsString()
    @IsNotEmpty()
    paymentTime!: string;

    @IsEnum(PaymentMethod)
    @IsNotEmpty()
    paymentMethod!: PaymentMethod;

    @IsString()
    @IsNotEmpty()
    transactionNumber!: string;

    @IsString()
    @IsOptional()
    recipient?: string;

    @IsBoolean()
    @IsNotEmpty()
    @Type(() => Boolean)
    isLegible!: boolean;

    @IsObject()
    @IsOptional()
    ocrRaw?: Record<string, any>;

    @IsEnum(EvidenceStatus)
    @IsOptional()
    status?: EvidenceStatus;

    @IsString()
    @IsOptional()
    description?: string;
}