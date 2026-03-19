import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { LoginDto } from './dto/login.dto';
import { User } from '@evihub/db';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { compareHash, hashData } from '../common/helpers/hash.helper';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private configService: ConfigService,
    ) { }

    async login(loginDto: LoginDto) {
        const user = await this.usersService.findByEmail(loginDto.email);

        if (!user || user.deletedAt) {
            throw new UnauthorizedException('Invalid credentials');
        }

        if (!user.isActive) {
            throw new UnauthorizedException('User is inactive');
        }

        const passwordValid = await compareHash(loginDto.password, user.password);
        if (!passwordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const tokens = await this.generateTokens(user);
        const hashedRefreshToken = await hashData(tokens.refreshToken);
        await this.usersService.updateRefreshToken(user.id, hashedRefreshToken);

        return {
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken,
        };
    }

    async logout(userId: string): Promise<void> {
        await this.usersService.updateRefreshToken(userId, null);
    }

    async refresh(user: User) {
        const tokens = await this.generateTokens(user);
        const hashedRefreshToken = await hashData(tokens.refreshToken);
        await this.usersService.updateRefreshToken(user.id, hashedRefreshToken);
        return tokens;
    }

    async validateRefreshToken(userId: string, refreshToken: string): Promise<User> {
        const user = await this.usersService.findById(userId);

        if (!user || !user.refreshToken || !user.isActive || user.deletedAt) {
            throw new UnauthorizedException('Access denied');
        }

        const isValid = await compareHash(refreshToken, user.refreshToken);
        if (!isValid) throw new UnauthorizedException('Refresh token invalid');

        return user;
    }

    private async generateTokens(user: User) {
        const payload: JwtPayload = {
            sub: user.id,
            email: user.email,
            role: user.role,
            accountId: user.accountId
        };

        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: this.configService.getOrThrow<string>('JWT_SECRET'),
                expiresIn: this.configService.getOrThrow<string>('JWT_ACCESS_EXPIRES') as JwtSignOptions['expiresIn'],
            }),
            this.jwtService.signAsync(payload, {
                secret: this.configService.getOrThrow<string>('JWT_REFRESH_SECRET'),
                expiresIn: this.configService.getOrThrow<string>('JWT_REFRESH_EXPIRES') as JwtSignOptions['expiresIn'],
            }),
        ]);

        return {
            accessToken,
            refreshToken
        };
    }
}
