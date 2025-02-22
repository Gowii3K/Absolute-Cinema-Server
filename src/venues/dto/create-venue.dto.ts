import { IsEmail, IsString } from "class-validator";

export class CreateVenueDto{

    @IsString()
    username:string;

    @IsString()
    location:string;

    @IsEmail()
    email: string;

    @IsString()
    password:string;

}