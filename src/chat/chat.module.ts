import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/user-model";
import {Chat} from "./chat-model";
import {UserChats} from "./user-chats-model";
import {Message} from "../message/message-model";

@Module({
  imports: [
    SequelizeModule.forFeature([User, Chat, UserChats, Message])
  ],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
