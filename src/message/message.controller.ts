import {Body, Controller, Get, Param, ParseIntPipe, Post} from '@nestjs/common';
import { MessageService } from './message.service';
import {CreateMessageDto} from "./dto/create-message.dto";

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}


  @Post('add')
  createMessage(@Body() dto: CreateMessageDto){
    const message = this.messageService.createMessage(dto);
    return message;
  }


  @Get(':id')
  getChatMessages(@Param('id', ParseIntPipe) id: number) {
    const messages = this.messageService.getChatMessagesSortedByLast(id)
    return messages
  }
}
