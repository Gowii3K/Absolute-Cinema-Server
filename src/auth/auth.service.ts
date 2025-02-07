import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { VenuesService } from 'src/venues/venues.service';

@Injectable()
export class AuthService {
  constructor(private venuesService: VenuesService) {}

  async validateLogin(email:string,password:string) {
    const user = await this.venuesService.findUserByEmail(email);
    const authorized = await bcrypt.compare(password, user.password);
    if (!authorized) {
      throw new UnauthorizedException('Wrong password');
    } else return user.venueId;
  }
}
