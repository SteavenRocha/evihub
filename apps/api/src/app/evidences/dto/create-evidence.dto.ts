import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateEvidenceDto {
    @IsNumber()
    @IsNotEmpty()
    @Type(() => Number)
    amount!: number;

    @IsString()
    @IsNotEmpty()
    currency!: string;

    @IsDateString()
    @IsNotEmpty()
    paymentDate!: string;

    @IsString()
    @IsOptional()
    bank?: string;

    @IsString()
    @IsOptional()
    reference?: string;

    @IsString()
    @IsNotEmpty()
    imageUrl!: string;

    @IsOptional()
    ocrRaw?: any;
}