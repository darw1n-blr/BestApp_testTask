import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/user-model";
import {Chat} from "../chat/chat-model";
import {Message} from "./message-model";

@Module({
  imports: [
    SequelizeModule.forFeature([User, Chat, Message])
  ],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
