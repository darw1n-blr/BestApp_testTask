import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./user-model";
import {CreateUserDto} from "./dto/create-user.dto";
import {Chat} from "../chat/chat-model";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private readonly userRepository: typeof User,
                @InjectModel(Chat) private readonly chatRepository: typeof Chat) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        if(!user) throw new BadRequestException("Something wrong");
        return user.id;
    }




}
