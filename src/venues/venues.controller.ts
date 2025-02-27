import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VenuesService } from './venues.service';
import { Venue } from './interface/venue';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Controller('venues')
export class VenuesController {
  constructor(private venuesService: VenuesService) {}

  @Post()
  createUser(@Body() payload: CreateVenueDto): Promise<Venue> {
    return this.venuesService.createVenue(payload);
  }

  @Get()
  getAllUsers(): Promise<Venue[]> {
    return this.venuesService.getAllVenue();
  }
  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.venuesService.getUser(parseInt(id, 10));
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): Promise<Venue> {
    return this.venuesService.deleteVenue(parseInt(id, 10));
  }

  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body() payload: UpdateVenueDto,
  ): Promise<Venue> {
    return this.venuesService.updateVenue(parseInt(id, 10), payload);
  }
  @Put('/address/:id')
  updateVenueAddress(
    @Param('id') id: string,
    @Body() payload: UpdateAddressDto,
  ): Promise<Venue> {
    return this.venuesService.updateAddress(parseInt(id, 10), payload);
  }
}
