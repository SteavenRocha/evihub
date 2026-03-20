import { Body, Controller, Param, ParseUUIDPipe, Patch, Post } from "@nestjs/common";
import { UsersService } from "../../users/users.service";
import { CreateUserDto } from "../../users/dto/create-user.dto";
import { UpdateUserStatusDto } from "../dto/update-user-status.dto";
import { ApiKey } from "../decorators/api-key.decorator";

@ApiKey()
@Controller('webhooks/users')
export class WebhookUsersController {
    constructor(private usersService: UsersService) { }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Patch(':id/status')
    updateStatus(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateUserStatusDto: UpdateUserStatusDto,
    ) {
        return this.usersService.updateStatus(id, updateUserStatusDto.isActive);
    }
}