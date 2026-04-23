import { IsDateString, IsEnum, IsOptional } from "class-validator";
import { BuildQueryDto } from "../../common/dto/build-query.dto";
import { Currency, EvidenceStatus, PaymentMethod } from "@evihub/db";

export class FilterEvidenceDto extends BuildQueryDto {
    @IsOptional()
    @IsEnum(EvidenceStatus)
    status?: EvidenceStatus

    @IsOptional()
    @IsEnum(PaymentMethod)
    paymentMethod?: PaymentMethod

    @IsOptional()
    @IsEnum(Currency)
    currency?: Currency

    @IsOptional()
    @IsDateString()
    paymentDateFrom?: string

    @IsOptional()
    @IsDateString()
    paymentDateTo?: string

    @IsOptional()
    @IsDateString()
    createdDateFrom?: string

    @IsOptional()
    @IsDateString()
    createdDateTo?: string
}