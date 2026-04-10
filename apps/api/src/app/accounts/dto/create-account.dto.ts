import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateAccountDto {
    @IsUUID()
    @IsNotEmpty()
    customerId!: string;
}
