import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';

@Injectable()
export class VenuesService {
  constructor(private prismaService: PrismaService) {}

  async createVenue(payload: CreateVenueDto) {
    const salt= await bcrypt.genSalt();
    const password=await bcrypt.hash(payload.password,salt);
    payload.password=password;
    return await this.prismaService.venue.create({
      data: payload,
    });
  }

  async getAllVenue() {
    return this.prismaService.venue.findMany();
  }

  async deleteVenue(id: number) {
    return this.prismaService.venue.delete({
      where: { venueId: id },
    });
  }

  async findVenueByEmail(email: string) {
    const user = await this.prismaService.venue.findFirst({
      where: { email: email },
    });
    if (!user) {
      throw new NotFoundException('Email nsdsdot found');
    }
    return user;
  }

  async updateVenue(id: number, payload: UpdateVenueDto) {
    return this.prismaService.venue.update({
      where: { venueId: id },
      data: payload,
    });
  }
}
