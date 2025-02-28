import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { VenuesService } from 'src/venues/venues.service';
import { JwtService } from '@nestjs/jwt';
import { Venue } from 'src/venues/interface/venue';
import { UsersService } from 'src/users/users.service';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private venuesService: VenuesService,
    private jwtService: JwtService,
    private usersService: UsersService,
    private prismaService: PrismaService,
  ) {}

  async validateLogin(email: string, password: string, type: string) {
    let details;
    if (type === 'user') {
      details = await this.usersService.getUserByEmail(email);
    } else if (type === 'venue') {
      details = await this.venuesService.findVenueByEmail(email);
    }

    const authorized = await bcrypt.compare(password, details.password);
    if (!authorized) {
      throw new UnauthorizedException('Wrong password');
    } else return details;
  }

  async login(entity: Venue | User) {
    console.log(entity);
    let payload;
    if ('userId' in entity) {
      console.log('its herer');
      payload = {
        name: entity.username,
        sub: entity.userId,
      };
    } else {
      console.log("its in venue");
      payload = {
        name: entity.username,
        sub: entity.venueId,
      };
    }
    console.log('coming here');
    console.log(payload);

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async googleLogin(req) {
    console.log(req);
    if (!req.user) {
      return 'No user from google';
    }
    let user = await this.prismaService.user.findUnique({
      where: { email: req.user.email },
    });

    if (!user) {
      console.log('user does not exist');
      user = await this.prismaService.user.create({
        data: { username: req.user.email, email: req.user.email, password: '' },
      });
    }
    const token = await this.login(user);
    console.log(token);
    return token;
  }
}
