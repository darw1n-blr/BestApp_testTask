import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "../users/user-model";
import {Chat} from "./chat-model";
import {CreateChatDto} from "./dto/create-chat.dto";
import {Message} from "../message/message-model";

@Injectable()
export class ChatService {

    constructor(@InjectModel(User) private readonly userRepository: typeof User,
                @InjectModel(Chat) private readonly chatRepository: typeof Chat) {}

    async createChat(dto: CreateChatDto) {
       const chat = await this.chatRepository.create({name: dto.name});
       if(!chat) throw new BadRequestException("Something wrong");
       const users = await this.userRepository.findAll({where: {id: dto.userIds}})
        await chat.$set('users', users);

       return chat.id;
    }

    async getUserChatsSortedByLastMessage(id:number){
        const user = await this.userRepository.findByPk(id)
        if(!user) throw new NotFoundException(`User with id ${id} not found`);
        const chats = await this.chatRepository.findAll({
            include: [
                {
                    model: Message,
                    required: true,
                    order: [['createdAt', 'DESC']],
                },
                {
                    model: User,
                    where: { id: id },
                    attributes: [],
                },
            ],


        });

        if(!chats) throw new NotFoundException("No chats found");

        return chats;

    }




}