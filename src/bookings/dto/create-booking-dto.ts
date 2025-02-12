import { IsDateString, IsInt, IsString } from "class-validator";

export class CreateBookingDto{
  

    @IsDateString()
    date: string
    @IsInt()
    screenId:number
    @IsInt()
    seatNo:number

}