import { Controller, HttpCode, Post, Body, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import type { User } from '@evihub/db';
import { Public } from './decorators/public.decorator';
import { CurrentUser } from './decorators/current-user.decorator';
import { Refresh } from './decorators/refresh.decorator';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Public()
    @Post('login')
    @HttpCode(HttpStatus.OK)
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }

    @Post('logout')
    @HttpCode(HttpStatus.NO_CONTENT)
    logout(@CurrentUser('id') userId: string) {
        return this.authService.logout(userId);
    }

    @Refresh()
    @Post('refresh')
    @HttpCode(HttpStatus.OK)
    refresh(@CurrentUser() user: User) {
        return this.authService.refresh(user);
    }
}
