import { IsInt, IsNumber, IsString } from 'class-validator';

export class UpdateAddressDto {
  @IsString()
  location: string;

  @IsNumber()
  lat: number;
  @IsNumber()
  lng: number;
}
