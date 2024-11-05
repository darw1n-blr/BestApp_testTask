import {Body, Controller, Get, Param, ParseIntPipe, Post} from '@nestjs/common';
import { ChatService } from './chat.service';
import {CreateChatDto} from "./dto/create-chat.dto";

@Controller('chats')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}


  @Post('add')
  createChat(@Body() dto: CreateChatDto) {
    const chat = this.chatService.createChat(dto)
    return chat
  }

  @Get(':id')
  getUserChats(@Param('id', ParseIntPipe) id: number) {
    const chats = this.chatService.getUserChatsSortedByLastMessage(id)
    return chats;
  }







}
