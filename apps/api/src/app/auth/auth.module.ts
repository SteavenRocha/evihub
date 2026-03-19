import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,

    PassportModule,

    JwtModule.register({}),
  ],
  providers: [
    AuthService,
    JwtStrategy,
    JwtRefreshStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule { }
