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
        return this.venuesService.createUser(payload);
    }

    @Get()
    getAllUsers():Promise<Venue[]>{
        return this.venuesService.getAllUsers();
    }

    @Delete(':id')
    deleteUser(@Param('id')id:string):Promise <Venue>{
        return this.venuesService.deleteUser(parseInt(id,10));
    }

    @Put(':id')
    updateUser(@Param('id') id:string ,@Body() payload:UpdateVenueDto):Promise<Venue>{
        return this.venuesService.updateUser(parseInt(id,10),payload);
    }


}
