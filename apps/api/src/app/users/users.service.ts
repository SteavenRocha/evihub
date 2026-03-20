import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService, User } from '@evihub/db';
import { hashData } from '../common/helpers/hash.helper';

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }

  async create(createUserDto: CreateUserDto) {
    const passwordHash = await hashData(createUserDto.password);
    return this.prismaService.user.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        password: passwordHash,
        role: createUserDto.role,
        accountId: createUserDto.accountId,
        ...(createUserDto.isActive !== undefined && { isActive: createUserDto.isActive }),
      },
    });
  }

  async findAll(accountId: string) {
    return this.prismaService.user.findMany({
      where: { accountId, deletedAt: null },
    });
  }

  async findById(id: string): Promise<User | null> {
    return this.prismaService.user.findUnique({
      where: { id, deletedAt: null },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prismaService.user.findUnique({
      where: { email, deletedAt: null },
    });
  }

  async updateStatus(id: string, isActive: boolean): Promise<void> {
    await this.prismaService.user.update({
      where: { id },
      data: { isActive },
    });
  }

  async updateRefreshToken(id: string, refreshToken: string | null): Promise<void> {
    await this.prismaService.user.update({
      where: { id },
      data: { refreshToken },
    });
  }
}
