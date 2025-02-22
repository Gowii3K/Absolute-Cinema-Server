import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import axios from 'axios';

@Injectable()
export class VenuesService {
  constructor(private prismaService: PrismaService) {}

  async createVenue(payload: CreateVenueDto) {
    const key = process.env.GOOGLE_API_KEY;
    console.log(key);

    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(payload.location)}&key=${key}`,
    );

    const data=response.data;
    console.log(data);
    

    if(!data || data.status==='ZERO_RESULTS'){
      throw new HttpException('Could not find location',422);
    }

    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash(payload.password, salt);
    payload.password = password;
    const lat:number=data.results[0].geometry.location.lat;
    const lng:number=data.results[0].geometry.location.lng;
    const location=data.results[0].formatted_address;
    console.log(lat,lng,location);
    return await this.prismaService.venue.create({
      data:{
        ...payload,
        lat:lat,
        lng:lng,
        location:location
      }
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
