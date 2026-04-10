import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Prisma, PrismaService, User } from '@evihub/db';
import { hashData } from '../common/helpers/hash.helper';
import { BuildQueryDto } from '../common/dto/build-query.dto';
import { paginate } from '../common/helpers/paginator';
import { sanitizeUser } from '../common/helpers/sanitize-user.helper';

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }

  async create(createUserDto: CreateUserDto) {
    const passwordHash = await hashData(createUserDto.password);

    const saved = await this.prismaService.user.create({
      data: {
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        email: createUserDto.email,
        password: passwordHash,
        role: createUserDto.role,
        accountId: createUserDto.accountId,
      },
    });

    return sanitizeUser(saved);
  }

  async findAllByAccount(accountId: string, buildQueryDto: BuildQueryDto) {
    const { search } = buildQueryDto;

    const where: Prisma.UserWhereInput = {
      accountId,
      deletedAt: null,
      ...(search && {
        OR: [
          { email: { contains: search, mode: 'insensitive' } },
          { firstName: { contains: search, mode: 'insensitive' } },
          { lastName: { contains: search, mode: 'insensitive' } },
        ],
      }),
    };

    const result = await paginate<User>(this.prismaService.user, buildQueryDto, {
      where,
      orderBy: { createdAt: 'desc' },
    });

    return {
      ...result,
      data: result.data.map(sanitizeUser),
    };
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
