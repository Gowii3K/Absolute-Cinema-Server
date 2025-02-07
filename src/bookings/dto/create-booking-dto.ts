import { IsDateString, IsInt } from "class-validator";

export class CreateBookingDto{
    @IsInt()
    slot: number
    @IsDateString()
    date: string
    @IsInt()
    screenId:number


}