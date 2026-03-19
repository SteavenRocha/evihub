import { createParamDecorator, ExecutionContext, InternalServerErrorException } from '@nestjs/common';
import { User } from '@evihub/db';

export const CurrentUser = createParamDecorator(
    (data: keyof User | undefined, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        const user = request.user as User;

        if (!user) {
            throw new InternalServerErrorException('User not found in request, check JwtAuthGuard');
        }

        return data ? user[data] : user;
    },
);