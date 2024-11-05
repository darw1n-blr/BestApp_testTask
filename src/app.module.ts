import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ChatModule } from './chat/chat.module';
import { MessageModule } from './message/message.module';
import {ConfigModule} from "@nestjs/config";
import * as process from "node:process";
import {UserChats} from "./chat/user-chats-model";
import {Message} from "./message/message-model";
import {User} from "./users/user-model";
import {Chat} from "./chat/chat-model";

@Module({
  imports: [
      ConfigModule.forRoot({
        envFilePath: '.env',
      }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Chat, UserChats, Message],
      autoLoadModels: true,
    }),
    UsersModule,
    ChatModule,
    MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
