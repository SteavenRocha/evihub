import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateEvidenceDto {
    @IsNumber()
    @IsNotEmpty()
    @Type(() => Number)
    amount!: number;

    @IsString()
    @IsNotEmpty()
    currency!: string;

    @IsString()
    @IsNotEmpty()
    paymentDate!: string;

    @IsString()
    @IsNotEmpty()
    paymentTime!: string;

    @IsString()
    @IsNotEmpty()
    bank!: string;

    @IsString()
    @IsNotEmpty()
    reference!: string;

    @IsString()
    @IsNotEmpty()
    recipient!: string;

    @IsString()
    @IsNotEmpty()
    imageKey!: string;

    @IsString()
    @IsOptional()
    ocrRaw?: string;

    @IsBoolean()
    @IsNotEmpty()
    @Type(() => Boolean)
    isLegible!: boolean;

    @IsString()
    @IsOptional()
    description?: string;
}