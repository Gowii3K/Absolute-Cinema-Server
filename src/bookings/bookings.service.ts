import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking-dto';
import { Slot } from './interface/slots';

@Injectable()
export class BookingsService {
  constructor(private prismaService: PrismaService) {}

  async getBookings(id: number) {
    //find opening and closing time of screen
    const time = await this.prismaService.show.findFirst({
      where: { showId: id },
      include:{screen:true}
    });

    //find existing books for the date
    const booked = await this.prismaService.booking.findMany({
      where: { showId: id},
      select: { seatNo: true },
    });

    if (time) {
      const { seats } = time.screen;
      const bookedArr = new Set(booked.map((booking) => booking.seatNo));

      const slotsArray: Slot[] = [];

      for (let i = 1; i <= seats; i++) {
        slotsArray.push({
          seatNo: i,
          isBooked: bookedArr.has(i),
        });
      }
    
      return slotsArray;
    }

  }
  async createBooking(payload: CreateBookingDto) {
    return this.prismaService.booking.create({
      data: payload,
    });
  }
}
