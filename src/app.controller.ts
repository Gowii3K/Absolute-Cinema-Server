import { Controller, Get, Post, UseGuards,Request } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/dto/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


}
