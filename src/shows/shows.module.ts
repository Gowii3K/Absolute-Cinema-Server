import { Module } from '@nestjs/common';
import { ShowsController } from './shows.controller';
import { ShowsService } from './shows.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { S3Module } from 'src/s3/s3.module';

@Module({
  controllers: [ShowsController],
  providers: [ShowsService,PrismaService],
  imports:[S3Module]
})
export class ShowsModule {}
