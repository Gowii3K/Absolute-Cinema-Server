import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './dto/local-auth.guard';
import { JwtAuthGuard } from './dto/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req) {
    console.log(req.user);
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(@Request() req) {
    return 'sdsdsd';
  }
}
