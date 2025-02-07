import { Transform } from "class-transformer";
import { IsDate, IsDateString, IsInt } from "class-validator";

export class GetBookingsDto{
    @Transform(({value})=>parseInt(value,10))
    @IsInt()
    id:number
    @IsDateString()
    date:string
}