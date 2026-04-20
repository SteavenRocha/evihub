import { IsDateString, IsEnum, IsOptional, IsString } from "class-validator";
import { BuildQueryDto } from "../../common/dto/build-query.dto";
import { EvidenceStatus } from "@evihub/db";

export class FilterEvidenceDto extends BuildQueryDto {
    @IsOptional()
    @IsEnum(EvidenceStatus)
    status?: EvidenceStatus

    @IsOptional()
    @IsString()
    bank?: string

    @IsOptional()
    @IsString()
    currency?: string

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