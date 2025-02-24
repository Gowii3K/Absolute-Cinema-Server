import { IsEmail, IsString } from 'class-validator';

export default class CreateUserDto {
  @IsString()
  username: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}
