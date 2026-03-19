import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';

export class CreateAccountDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    name!: string;

    @IsUUID()
    @IsNotEmpty()
    customerId!: string;

    @IsBoolean()
    @IsOptional()
    isActive?: boolean;
}