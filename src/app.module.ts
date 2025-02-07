import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { ScreensModule } from './screens/screens.module';
import { VenuesModule } from './venues/venues.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [ AuthModule, ScreensModule, VenuesModule, BookingsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
