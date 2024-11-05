import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {UserChats} from "../chat/user-chats-model";
import {User} from "./user-model";
import {Chat} from "../chat/chat-model";

@Module({
  imports: [
      SequelizeModule.forFeature([User, Chat, UserChats])
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
