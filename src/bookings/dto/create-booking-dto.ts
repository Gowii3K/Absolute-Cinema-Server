import { IsDateString, IsInt, IsString } from "class-validator";

export class CreateBookingDto{
  

    @IsInt()
    showId:number
    @IsInt()
    seatNo:number

}