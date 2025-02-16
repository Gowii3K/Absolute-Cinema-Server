import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { VenuesModule } from 'src/venues/venues.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';


@Module({
  imports: [VenuesModule,PassportModule,JwtModule.register({
    secret:process.env.JWT_SECRET,
    signOptions:{expiresIn:'1h'}
  })],
  providers: [AuthService,LocalStrategy,JwtStrategy],
  controllers: [AuthController],
  exports:[AuthService]
})
export class AuthModule {}
