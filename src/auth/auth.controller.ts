import { Controller, Get, Req, Request, Res, UseGuards } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './dto/local-auth.guard';
import { JwtAuthGuard } from './dto/jwt-auth.guard';
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
  async googleAuthRedirect(@Req() req, @Res() res) {
    const response = await this.authService.googleLogin(req);
    if (typeof response === 'string') {
      // Handle the case where no user is found
      return { url: `http://your-frontend-url.com/login?error=no_user` };
    }
    return res.redirect(
      `http://localhost:5173/user-home-page?token=${response.access_token}`,
    );
  }

  @Get('venue')
  @UseGuards(AuthGuard('googleVenue'))
  async googleAuthVenue(@Req() req) {}

  @Get('google/callback/venue')
  @UseGuards(AuthGuard('googleVenue'))
  async googleAuthRedirectVenue(@Req() req, @Res() res) {
    const response = await this.authService.googleLoginVenue(req);
    if (typeof response === 'string') {
      // Handle the case where no user is found
      return { url: `http://your-frontend-url.com/login?error=no_user` };
    }
    return res.redirect(
      `http://localhost:5173/venue-dash-board?token=${response.access_token}`,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('test')
  getHello(@Request() req) {
    return 'sdsdsd';
  }
}
