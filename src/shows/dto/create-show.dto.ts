import { IsDateString, IsInt, IsString } from "class-validator";

export class CreateShowDto{
    @IsInt()
    screenId:number
    @IsDateString()
    date:string

    @IsString()
    time:string

    @IsString()
    name:string


}