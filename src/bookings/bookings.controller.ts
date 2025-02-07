import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { GetBookingsDto } from './dto/get-bookings.dto';
import { CreateBookingDto } from './dto/create-booking-dto';

@Controller('bookings')
export class BookingsController {
    constructor(private bookingsService:BookingsService){}
    @Get(':id/:date')
    getBookings(@Param()params:GetBookingsDto){
        const {id, date}=params;
        return this.bookingsService.getBookings(id,date);
    }

    @Post()
    createBooking(@Body() payload:CreateBookingDto){
        return this.bookingsService.createBooking(payload);

    }
}
