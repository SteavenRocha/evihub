import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Request } from "express";
import { timingSafeEqual } from "crypto";

@Injectable()
export class ApiKeyGuard implements CanActivate {
    constructor(private configService: ConfigService) { }

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest<Request>();
        const apiKey = request.headers['x-api-key'];

        if (!apiKey || typeof apiKey !== 'string') {
            throw new UnauthorizedException('API Key is required and must be a string');
        }

        const validApiKey = this.configService.getOrThrow<string>('WEBHOOK_API_KEY');

        try {
            const a = Buffer.from(apiKey);
            const b = Buffer.from(validApiKey);

            if (a.length !== b.length || !timingSafeEqual(a, b)) {
                throw new UnauthorizedException('Invalid API Key');
            }
        } catch (error) {
            throw new UnauthorizedException('Invalid API Key');
        }

        return true;
    }
}