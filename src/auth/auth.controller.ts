import { Controller, Get, Req, Request, UseGuards } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './dto/local-auth.guard';
import { JwtAuthGuard } from './dto/jwt-auth.guard';
import { GoogleAuthGuard } from './dto/google-auth.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req) {
    console.log(req.user);
    return this.authService.login(req.user);
  }

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}
  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.authService.googleLogin(req);
  }

  @UseGuards(JwtAuthGuard)
  @Get('test')
  getHello(@Request() req) {
    return 'sdsdsd';
  }
}
