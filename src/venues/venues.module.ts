import { Module } from '@nestjs/common';
import { VenuesController } from './venues.controller';
import { VenuesService } from './venues.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    exports: [VenuesService],
  providers: [VenuesService,PrismaService],
  controllers: [VenuesController]

})
export class VenuesModule {}
