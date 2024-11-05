import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "../users/user-model";
import {Chat} from "../chat/chat-model";
import {Message} from "./message-model";
import {CreateMessageDto} from "./dto/create-message.dto";

@Injectable()
export class MessageService {

    constructor(@InjectModel(User) private readonly userRepository: typeof User,
                @InjectModel(Chat) private readonly chatRepository: typeof Chat,
                @InjectModel(Message) private readonly messageRepository: typeof Message) {}

    async createMessage(dto: CreateMessageDto) {
        const chat = await this.chatRepository.findByPk(dto.chatId)
        if(!chat) throw new NotFoundException(`Chat with id ${dto.chatId} not found`);
        const user = await this.userRepository.findByPk(dto.userId);
        if(!user) throw new NotFoundException(`User with id ${dto.userId} not found`);


        const message = await this.messageRepository.create(dto);
        if(!message) throw new BadRequestException("Something wrong");
        return message.id;
    }

    async getChatMessagesSortedByLast(id:number){
        const chat = await this.chatRepository.findByPk(id)
        if(!chat) throw new NotFoundException(`Chat with id ${id} not found`);
       const messages = await this.messageRepository.findAll(
           {where:{chatId: id}, order: [['createdAt','ASC']]},)
        if(!messages) throw new NotFoundException(`Chat with id ${id} not found`);
        return messages;



    }




}