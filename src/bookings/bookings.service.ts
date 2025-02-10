import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking-dto';
import { Slot } from './interface/slots';

@Injectable()
export class BookingsService {
  constructor(private prismaService: PrismaService) {}
  
  async getBookings(id: number, date: string) {
    const time = await this.prismaService.screen.findFirst({
      where: { screenId: id },
      select: { openingTime: true, closingTime: true },
    });

    const booked = await this.prismaService.booking.findMany({
      where: { screenId: id, date: date },
      select: { slot: true },
    });

    if (time) {
      const { openingTime, closingTime } = time;
      const bookedArr = new Set(booked.map((booking) => booking.slot));
      let openingHour = Math.floor(openingTime / 100);
      let openingMintue = openingTime % 100;
      const slots = Math.floor((closingTime - openingTime) / 100);
      const slotsArray: Slot[] = [];

      for (let i = 0; i < slots; i++) {
        slotsArray.push({
          starts: `${openingHour}.${openingMintue}`,
          ends: `${openingHour + 1}.${openingMintue}`,
          slot: i,
          isBooked: bookedArr.has(i),
        });

        openingHour += 1;
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
