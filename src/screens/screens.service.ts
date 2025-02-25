import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateScreenDto } from './dto/create-screen.dto';
import { UpdateScreenDto } from './dto/update-screen.dto';

@Injectable()
export class ScreensService {
  constructor(private prismaService: PrismaService) {}

  async getScreens(id: number) {
    return await this.prismaService.screen.findMany({
      where: { venueId: id },
    });
  }
  async createScreen(payload: CreateScreenDto) {
    return await this.prismaService.screen.create({
      data: payload,
    });
  }

  async updateScreen(screenId: number, payload: UpdateScreenDto) {
    return await this.prismaService.screen.update({
      where: { screenId: screenId },
      data: payload,
    });
  }

  async deleteScreen(screenId: number) {
    return await this.prismaService.screen.delete({
      where: { screenId: screenId },
    });
  }
}
