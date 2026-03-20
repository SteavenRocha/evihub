import { Body, Controller, Param, ParseUUIDPipe, Patch, Post } from "@nestjs/common";
import { AccountsService } from "../../accounts/accounts.service";
import { CreateAccountDto } from "../dto/create-account.dto";
import { UpdateAccountStatusDto } from "../dto/update-account-status.dto";
import { ApiKey } from "../decorators/api-key.decorator";

@ApiKey()
@Controller('webhooks/accounts')
export class WebhookAccountsController {
    constructor(
        private accountsService: AccountsService
    ) { }

    @Post()
    create(@Body() createAccountDto: CreateAccountDto) {
        return this.accountsService.create(createAccountDto);
    }

    @Patch(':id/status')
    updateStatus(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateAccountStatusDto: UpdateAccountStatusDto
    ) {
        return this.accountsService.updateStatus(id, updateAccountStatusDto.isActive);
    }
}