import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async createUser(payload: CreateUserDto) {
    const salt= await bcrypt.genSalt();
    const password=await bcrypt.hash(payload.password,salt);
    payload.password=password;
    return await this.prismaService.user.create({
      data: payload,
    });
  }

  async getAllUsers() {
    return this.prismaService.user.findMany();
  }

  async deleteUser(id: number) {
    return this.prismaService.user.delete({
      where: { userId: id },
    });
  }

  async findUserByEmail(email: string) {
    const user = await this.prismaService.user.findFirst({
      where: { email: email },
    });
    if (!user) {
      throw new NotFoundException('Email nsdsdot found');
    }
    return user;
  }

  async updateUser(id: number, payload: UpdateUserDto) {
    return this.prismaService.user.update({
      where: { userId: id },
      data: payload,
    });
  }
}
