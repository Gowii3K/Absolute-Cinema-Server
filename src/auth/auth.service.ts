import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { VenuesService } from 'src/venues/venues.service';
import { JwtService } from '@nestjs/jwt';
import { Venue } from 'src/venues/interface/venue';

@Injectable()
export class AuthService {
  constructor(
    private venuesService: VenuesService,
    private jwtService: JwtService,
  ) {}

  async validateLogin(email: string, password: string) {
    const venue = await this.venuesService.findVenueByEmail(email);
    const authorized = await bcrypt.compare(password, venue.password);
    if (!authorized) {
      throw new UnauthorizedException('Wrong password');
    } else return venue;
  }

  async login(venue: Venue) {
    const payload = { name: venue.location, sub: venue.venueId };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
