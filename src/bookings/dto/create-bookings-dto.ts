import { IsArray, IsDateString, IsInt, IsOptional, IsString } from "class-validator";

export class CreateBookingsDto{
  

    @IsInt()
    showId:number
    @IsArray()
    seatNo:number[]
    @IsInt()
    @IsOptional()
    userId:number

}