import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import CreateUserDto from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor( private usersService:UsersService){}

    @Get(':userId')
    getUserById(@Param('userId') userId :string){
        return this.usersService.getUserById(parseInt(userId,10));


    }

    @Post()
    createUser(@Body() payload:CreateUserDto){
        return this.usersService.createUser(payload);

    }

}
