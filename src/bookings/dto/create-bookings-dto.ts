import { IsArray, IsDateString, IsInt, IsString } from "class-validator";

export class CreateBookingsDto{
  

    @IsInt()
    showId:number
    @IsArray()
    seatNo:number[]

}