import { Module } from '@nestjs/common';
import { WebhookAccountsController } from './controllers/webhook-accounts.controller';
import { AccountsModule } from '../accounts/accounts.module';
import { UsersModule } from '../users/users.module';
import { WebhookUsersController } from './controllers/webhook-users.controller';

@Module({
  imports: [AccountsModule, UsersModule],
  controllers: [WebhookAccountsController, WebhookUsersController],
  providers: [],
})
export class WebhookModule { }
