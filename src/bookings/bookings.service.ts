import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking-dto';

@Injectable()
export class BookingsService {
    constructor(private prismaService:PrismaService){}

    async getBookings(id:number,date:string){
        const time=await this.prismaService.screen.findFirst({
            where:{screenId:id},
            select:{openingTime:true,closingTime:true}
        })
        console.log(time);
        if(time){
            const numSlots=time?.closingTime-time?.openingTime;
            console.log(numSlots/60);
            const slots={};
            for(let i=0;i<numSlots/60;i++){


            }
        }
        
        return this.prismaService.booking.findMany({
            where:{screenId:id,date:date}
        })
        
    }
    async createBooking(payload:CreateBookingDto){
        return this.prismaService.booking.create({
            data:payload
        })
    }
}
