import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from "../interfaces/jwt-payload.interface";
import { UsersService } from "../../users/users.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(
        private configService: ConfigService,
        private usersService: UsersService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.getOrThrow<string>('JWT_SECRET'),
        });
    }

    async validate(payload: JwtPayload) {
        const user = await this.usersService.findById(payload.sub);

        if (!user || !user.isActive || user.deletedAt) {
            throw new UnauthorizedException('User is inactive or not found');
        }

        return user;
    }
}