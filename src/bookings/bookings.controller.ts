import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { GetBookingsDto } from './dto/get-bookings.dto';
import { CreateBookingDto } from './dto/create-booking-dto';

@Controller('bookings')
export class BookingsController {
    constructor(private bookingsService:BookingsService){}
    @Get(':id')
    getBookings(@Param('id')id:string){
        
        return this.bookingsService.getBookings(parseInt(id,10));
    }

    @Post()
    createBooking(@Body() payload:CreateBookingDto){
        return this.bookingsService.createBooking(payload);

    }
}
