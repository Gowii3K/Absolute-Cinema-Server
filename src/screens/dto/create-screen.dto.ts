import { IsDateString, IsInt, Max, Min } from "class-validator";

export class CreateScreenDto{
    @IsInt()
    venueId:number;
    

    @IsInt()
    seats:number;
}


























































