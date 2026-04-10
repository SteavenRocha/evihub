import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Query } from "@nestjs/common";
import { UsersService } from "../../users/users.service";
import { CreateUserDto } from "../../users/dto/create-user.dto";
import { UpdateUserStatusDto } from "../dto/update-user-status.dto";
import { ApiKey } from "../decorators/api-key.decorator";
import { BuildQueryDto } from "../../common/dto/build-query.dto";

@ApiKey()
@Controller('webhooks/users')
export class WebhookUsersController {
    constructor(private usersService: UsersService) { }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Get('account/:accountId')
    findAllByAccount(
        @Param('accountId', ParseUUIDPipe) accountId: string,
        @Query() buildQueryDto: BuildQueryDto
    ) {
        return this.usersService.findAllByAccount(accountId, buildQueryDto);
    }

    @Patch(':id/status')
    updateStatus(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateUserStatusDto: UpdateUserStatusDto,
    ) {
        return this.usersService.updateStatus(id, updateUserStatusDto.isActive);
    }
}