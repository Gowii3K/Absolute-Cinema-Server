import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin:"http://localhost:5173",
    methods:'GET,POST,PUT,DELETE',
    allowedHeaders:'Content-Type,Authorization',
    credentials:true,
  })
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted: true,
    transform: true

  }))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
