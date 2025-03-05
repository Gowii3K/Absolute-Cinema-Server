import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { S3Service } from 'src/s3/s3.service';

@Injectable()
export class ShowsService {
  constructor(private prismaService: PrismaService, private s3Service: S3Service) {}

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

  async addImageToShow(file:Express.Multer.File,id:number){
    const show= await this.prismaService.show.findFirst({
      where:{showId:id}
    })
    const key= `${file.fieldname}${Date.now()}`
    const imageUrl= await this.s3Service.uploadFile(file,key);
    
    return this.prismaService.show.update({
      where:{showId:id},
      data:{imageUrl: imageUrl}
    })

  }
}
