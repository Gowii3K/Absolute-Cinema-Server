import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import CreateUserDto from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async getUserById(userId: number) {
    return await this.prismaService.user.findUnique({
      where: { userId: userId },
    });
  }

  async getUserByEmail(email:string){
    return await this.prismaService.user.findUnique({
        where:{email:email}
    })
  }

  async createUser(payload: CreateUserDto) {
    const salts = bcrypt.genSaltSync();

    const hashedPassword = bcrypt.hashSync(payload.password, salts);
    payload.password = hashedPassword;

    return await this.prismaService.user.create({
      data: payload,
    });
  }
}
