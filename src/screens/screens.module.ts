import { Module } from '@nestjs/common';
import { ScreensController } from './screens.controller';
import { ScreensService } from './screens.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ScreensController],
  providers: [ScreensService,PrismaService]
})
export class ScreensModule {}
