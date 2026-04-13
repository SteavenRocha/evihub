import { Controller, HttpCode, Post, Body, HttpStatus, Get, Res } from '@nestjs/common';
import type { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import type { User } from '@evihub/db';
import { Public } from './decorators/public.decorator';
import { CurrentUser } from './decorators/current-user.decorator';
import { Refresh } from './decorators/refresh.decorator';
import { COOKIE_OPTIONS } from './constants/cookie.constants';
import { parseDuration } from '../common/helpers/duration.helper';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly configService: ConfigService,
    ) { }

    @Public()
    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(
        @Body() loginDto: LoginDto,
        @Res({ passthrough: true }) res: Response
    ) {
        const tokens = await this.authService.login(loginDto);

        res.cookie('accessToken', tokens.accessToken, {
            ...COOKIE_OPTIONS,
            maxAge: parseDuration(this.configService.getOrThrow('JWT_ACCESS_EXPIRES')),
        });

        res.cookie('refreshToken', tokens.refreshToken, {
            ...COOKIE_OPTIONS,
            maxAge: parseDuration(this.configService.getOrThrow('JWT_REFRESH_EXPIRES')),
        });

        return { message: 'ok' };
    }

    @Get('me')
    getMe(@CurrentUser() user: User) {
        return user;
    }

    @Post('logout')
    @HttpCode(HttpStatus.NO_CONTENT)
    async logout(
        @CurrentUser('id') userId: string,
        @Res({ passthrough: true }) res: Response
    ) {
        await this.authService.logout(userId);
        res.clearCookie('accessToken');
        res.clearCookie('refreshToken');
    }

    @Refresh()
    @Post('refresh')
    @HttpCode(HttpStatus.OK)
    async refresh(
        @CurrentUser() user: User,
        @Res({ passthrough: true }) res: Response
    ) {
        const tokens = await this.authService.refresh(user);

        res.cookie('accessToken', tokens.accessToken, {
            ...COOKIE_OPTIONS,
            maxAge: parseDuration(this.configService.getOrThrow('JWT_ACCESS_EXPIRES')),
        });

        res.cookie('refreshToken', tokens.refreshToken, {
            ...COOKIE_OPTIONS,
            maxAge: parseDuration(this.configService.getOrThrow('JWT_REFRESH_EXPIRES')),
        });

        return { message: 'ok' };
    }
}
