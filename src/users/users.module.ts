import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  exports: [UsersService],
  providers: [UsersService, PrismaService],
  controllers: [UsersController],
})
export class UsersModule {}
