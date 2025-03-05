import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { ScreensModule } from './screens/screens.module';
import { VenuesModule } from './venues/venues.module';
import { BookingsModule } from './bookings/bookings.module';
import { ShowsModule } from './shows/shows.module';
import { UsersModule } from './users/users.module';
import { S3Module } from './s3/s3.module';

@Module({
  imports: [ AuthModule, ScreensModule, VenuesModule, BookingsModule, ShowsModule, UsersModule, S3Module],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
