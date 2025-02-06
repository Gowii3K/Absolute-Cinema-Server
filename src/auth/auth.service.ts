import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateLogin(email:string,password:string) {
    const user = await this.usersService.findUserByEmail(email);
    const authorized = await bcrypt.compare(password, user.password);
    if (!authorized) {
      throw new UnauthorizedException('Wrong password');
    } else return user.userId;
  }
}
