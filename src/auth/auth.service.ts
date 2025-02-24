import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { VenuesService } from 'src/venues/venues.service';
import { JwtService } from '@nestjs/jwt';
import { Venue } from 'src/venues/interface/venue';
import { UsersService } from 'src/users/users.service';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private venuesService: VenuesService,
    private jwtService: JwtService,
    private usersService: UsersService,
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
    let payload;
    if("userId" in entity){
      payload={
        name:entity.username,
        sub:entity.userId
      }
    }
    else {
      payload={
        name:entity.username,
        sub:entity.venueId
      }
    }
      

    
    

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
