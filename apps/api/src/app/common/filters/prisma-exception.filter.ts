import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@evihub/db';
import { Response } from 'express';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
    override catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        switch (exception.code) {
            case 'P2002': {
                const driverError = exception.meta?.driverAdapterError as any;
                const field = driverError?.cause?.constraint?.fields?.[0] ?? 'field';

                const fieldMessages: Record<string, string> = {
                    customer_id: 'An account with this customer ID already exists',
                    email: 'A user with this email already exists',
                };

                const message = fieldMessages[field] ?? `A record with this ${field} already exists`;

                response.status(HttpStatus.CONFLICT).json({
                    statusCode: HttpStatus.CONFLICT,
                    message,
                    error: 'Conflict',
                });
                break;
            }
            case 'P2025': {
                response.status(HttpStatus.NOT_FOUND).json({
                    statusCode: HttpStatus.NOT_FOUND,
                    message: 'Resource not found',
                    error: 'Not Found',
                });
                break;
            }
            case 'P2003': {
                response.status(HttpStatus.BAD_REQUEST).json({
                    statusCode: HttpStatus.BAD_REQUEST,
                    message: 'Relation error: You cannot delete or create this record due to a foreign key constraint.',
                    error: 'Bad Request',
                });
                break;
            }
            default:
                super.catch(exception, host);
                break;
        }
    }
}