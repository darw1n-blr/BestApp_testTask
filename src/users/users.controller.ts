import {Body, Controller, Post} from '@nestjs/common';
import { UsersService } from './users.service';
import {CreateUserDto} from "./dto/create-user.dto";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('add')
  createUser(@Body() dto: CreateUserDto) {
    const user = this.usersService.createUser(dto)
    return user;
  }




}
