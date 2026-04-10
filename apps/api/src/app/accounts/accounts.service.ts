import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { PrismaService } from '@evihub/db';

@Injectable()
export class AccountsService {

  constructor(
    private readonly prismaService: PrismaService
  ) { }

  async create(createAccountDto: CreateAccountDto) {
    return this.prismaService.account.create({
      data: {
        customerId: createAccountDto.customerId,
      },
    });
  }

  async findAll() {
    return this.prismaService.account.findMany({
      where: { deletedAt: null },
    });
  }

  async findById(id: string) {
    const account = await this.prismaService.account.findUnique({
      where: { id, deletedAt: null },
    });

    if (!account) {
      throw new NotFoundException(`Account ${id} not found`);
    }

    return account;
  }

  async findByCustomerId(customerId: string) {
    return this.prismaService.account.findUnique({
      where: { customerId, deletedAt: null },
    });
  }

  async updateStatus(id: string, isActive: boolean): Promise<void> {
    await this.prismaService.account.update({
      where: { id },
      data: { isActive },
    });
  }
}
