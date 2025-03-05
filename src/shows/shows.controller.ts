import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Request,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ShowsService } from './shows.service';
import { CreateShowDto } from './dto/create-show.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('shows')
export class ShowsController {
  constructor(private showsService: ShowsService) {}

  @Get(':id/:date')
  getShows(@Param('id') id: string, @Param('date') date: string) {
    return this.showsService.getShows(parseInt(id, 10), date);
  }

  @Get(':date')
  getShowsByDate(@Param('date') date: string) {
    return this.showsService.getShowsByDate(date);
  }

  @Post()
  createShow(@Body() payload: CreateShowDto) {
    return this.showsService.createShow(payload);
  }

  @Delete(':showId')
  deleteShow(@Param('showId') showId: string) {
    return this.showsService.deleteShow(parseInt(showId, 10));
  }

  @UseInterceptors(FileInterceptor('file'))
  @Post(':id/upload-file')
  async addImageToShow(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
    @Request() req,
  ) {
    console.log(file);
    await this.showsService.addImageToShow(file,parseInt(id,10));
  }


}
