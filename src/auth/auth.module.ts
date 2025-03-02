import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { VenuesModule } from 'src/venues/venues.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { GoogleStrategy, GoogleStrategyVenue } from './google.strategy';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  //read up more on the config part
  imports: [
    VenuesModule,
    PassportModule,
    UsersModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h' },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy,GoogleStrategy,PrismaService,GoogleStrategyVenue],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
