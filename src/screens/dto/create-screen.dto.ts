import { IsDateString, IsInt, Max, Min } from "class-validator";

export class CreateScreenDto{
    @IsInt()
    venueId:number;
    @IsInt()
    @Min(0)
    @Max(2359)
    openingTime:number

    @IsInt()
    @Min(0)
    @Max(2359)
    closingTime:number
}