import { Body, Controller, Delete, Get, Param, Post,Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Post()
    createUser(@Body()payload: CreateUserDto):Promise<User>{
        return this.usersService.createUser(payload);
    }

    @Get()
    getAllUsers():Promise<User[]>{
        return this.usersService.getAllUsers();
    }

    @Delete(':id')
    deleteUser(@Param('id')id:string):Promise <User>{
        return this.usersService.deleteUser(parseInt(id,10));
    }

    @Put(':id')
    updateUser(@Param('id') id:string ,@Body() payload:UpdateUserDto):Promise<User>{
        return this.usersService.updateUser(parseInt(id,10),payload);
    }


}
