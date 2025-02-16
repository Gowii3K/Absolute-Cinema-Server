import { Body, Controller, Delete, Get, Param, Post,Put } from '@nestjs/common';
import { VenuesService } from './venues.service';
import { Venue } from './interface/venue';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';

@Controller('venues')
export class VenuesController {
    constructor(private venuesService: VenuesService){}

    @Post()
    createUser(@Body()payload: CreateVenueDto):Promise<Venue>{
        return this.venuesService.createVenue(payload);
    }

    @Get()
    getAllUsers():Promise<Venue[]>{
        return this.venuesService.getAllVenue();
    }

    @Delete(':id')
    deleteUser(@Param('id')id:string):Promise <Venue>{
        return this.venuesService.deleteVenue(parseInt(id,10));
    }

    @Put(':id')
    updateUser(@Param('id') id:string ,@Body() payload:UpdateVenueDto):Promise<Venue>{
        return this.venuesService.updateVenue(parseInt(id,10),payload);
    }


}
