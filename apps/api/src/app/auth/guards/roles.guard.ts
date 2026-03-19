import { CanActivate, ExecutionContext, ForbiddenException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '@evihub/db';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles?.length) return true;

        const { user } = context.switchToHttp().getRequest();

        if (!user) throw new InternalServerErrorException('User not found in request');

        if (!requiredRoles.includes(user.role)) {
            throw new ForbiddenException(
                `User requires one of these roles: [${requiredRoles.join(', ')}]`
            );
        }

        return true;
    }
}