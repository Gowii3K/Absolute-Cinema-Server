import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ShowsService {
  constructor(private prismaService: PrismaService) {}

  async getShows(id, date) {
    return this.prismaService.show.findMany({
      where: { screenId: id, date: date },
    });
  }

  async createShow(payload) {
    return this.prismaService.show.create({
      data: payload,
    });
  }

  async getShowsByDate(date) {
    return this.prismaService.show.findMany({
      where: { date: date },
    });
  }

  async deleteShow(showId){
    return this.prismaService.show.delete({
      where:{showId:showId}
    })
  }
}
