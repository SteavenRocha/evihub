
import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, Matches, MaxLength, MinLength } from 'class-validator';
import { Role } from '@evihub/db';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name!: string;

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(150)
    email!: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8, { message: 'The password must have at least 8 characters' })
    @MaxLength(64)
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])\S+$/, {
        message: 'Password must contain uppercase, lowercase, number and special character',
    })
    password!: string;

    @IsEnum(Role)
    @IsNotEmpty()
    role!: Role;

    @IsUUID()
    @IsNotEmpty()
    accountId!: string;

    @IsBoolean()
    @IsOptional()
    isActive?: boolean;
}