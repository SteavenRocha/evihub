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
    dateFrom?: string

    @IsOptional()
    @IsDateString()
    dateTo?: string
}