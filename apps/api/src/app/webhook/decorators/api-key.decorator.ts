import { applyDecorators, UseGuards } from "@nestjs/common";
import { Public } from "../../auth/decorators/public.decorator";
import { ApiKeyGuard } from "../guards/api-key.guard";

export const ApiKey = () => applyDecorators(
    Public(),
    UseGuards(ApiKeyGuard),
);