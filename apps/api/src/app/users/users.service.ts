import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService, User } from '@evihub/db';

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }

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

  async updateRefreshToken(id: string, refreshToken: string | null): Promise<void> {
    await this.prismaService.user.update({
      where: { id },
      data: { refreshToken },
    });
  }
}
