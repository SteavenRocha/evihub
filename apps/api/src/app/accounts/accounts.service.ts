import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { PrismaService } from '@evihub/db';

@Injectable()
export class AccountsService {

  constructor(
    private prisma: PrismaService
  ) { }

  async create(createAccountDto: CreateAccountDto) {
    return this.prisma.account.create({
      data: {
        name: createAccountDto.name,
        customerId: createAccountDto.customerId,
        ...(createAccountDto.isActive !== undefined && { isActive: createAccountDto.isActive }),
      },
    });
  }

  async findAll() {
    return this.prisma.account.findMany({
      where: { deletedAt: null },
    });
  }

  async findById(id: string) {
    const account = await this.prisma.account.findUnique({
      where: { id, deletedAt: null },
    });

    if (!account) {
      throw new NotFoundException(`Account ${id} not found`);
    }

    return account;
  }

  async findByCustomerId(customerId: string) {
    return this.prisma.account.findUnique({
      where: { customerId, deletedAt: null },
    });
  }

  async updateStatus(id: string, isActive: boolean): Promise<void> {
    await this.prisma.account.update({
      where: { id },
      data: { isActive },
    });
  }
}
