import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ScreensService } from './screens.service';
import { CreateScreenDto } from './dto/create-screen.dto';
import { UpdateScreenDto } from './dto/update-screen.dto';

@Controller('screens')
export class ScreensController {
  constructor(private screensService: ScreensService) {}

  @Get(':id')
  getScreens(@Param('id') id: string) {
    return this.screensService.getScreens(parseInt(id, 10));
  }

  @Post()
  createScreen(@Body() payload: CreateScreenDto) {
    return this.screensService.createScreen(payload);
  }

  @Put(':screenId')
  updateScreen(
    @Param('screenId') screenId: string,
    @Body() payload: UpdateScreenDto,
  ) {
    return this.screensService.updateScreen(parseInt(screenId, 10), payload);
  }

  @Delete(':screenId')
  deleteScreen(@Param('screenId') screenId: string) {
    return this.screensService.deleteScreen(parseInt(screenId, 10));
  }
}
