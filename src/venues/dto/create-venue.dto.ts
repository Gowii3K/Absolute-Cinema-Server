import { IsEmail, IsString } from "class-validator";

export class CreateVenueDto{

    @IsString()
    name:string;

    @IsEmail()
    email: string;

    @IsString()
    password:string;

}