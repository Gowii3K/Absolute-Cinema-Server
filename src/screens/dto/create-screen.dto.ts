import { IsInt } from "class-validator";

export class CreateScreenDto{
    @IsInt()
    userId:number;
}