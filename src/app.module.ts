import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { ScreensModule } from './screens/screens.module';

@Module({
  imports: [UsersModule, AuthModule, ScreensModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
