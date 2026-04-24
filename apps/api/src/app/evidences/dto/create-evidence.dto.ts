import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
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

    @IsString()
    @IsOptional()
    ocrRaw?: string;

    @IsEnum(EvidenceStatus)
    @IsOptional()
    status?: EvidenceStatus;

    @IsString()
    @IsOptional()
    description?: string;
}