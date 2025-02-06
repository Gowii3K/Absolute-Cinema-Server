import {
  Controller,
  Request,
  UseGuards,
} from '@nestjs/common';
import { Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './dto/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req) {
    return req.user;
  }
}

