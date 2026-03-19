import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from "../interfaces/jwt-payload.interface";
import { Request } from "express";
import { AuthService } from "../auth.service";

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
    constructor(
        private configService: ConfigService,
        private authService: AuthService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.getOrThrow<string>('JWT_REFRESH_SECRET'),
            passReqToCallback: true,
        });
    }

    async validate(req: Request, payload: JwtPayload) {
        const [, refreshToken] = req.headers.authorization?.split(' ') ?? [];
        if (!refreshToken) throw new UnauthorizedException();
        return this.authService.validateRefreshToken(payload.sub, refreshToken);
    }
}