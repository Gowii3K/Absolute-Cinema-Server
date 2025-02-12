import { Module } from '@nestjs/common';
import { ShowsController } from './shows.controller';
import { ShowsService } from './shows.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ShowsController],
  providers: [ShowsService,PrismaService]
})
export class ShowsModule {}
