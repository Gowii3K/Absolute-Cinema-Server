import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ShowsService } from './shows.service';
import { CreateShowDto } from './dto/create-show.dto';

@Controller('shows')
export class ShowsController {
    constructor(private showsService:ShowsService){}

    @Get(':id/:date')
    getShows(@Param('id') id:string,@Param('date') date:string){
        return this.showsService.getShows(parseInt(id,10),date);
    }

    @Post()
    createShow(@Body() payload: CreateShowDto){
        return this.showsService.createShow(payload)
    }
}
