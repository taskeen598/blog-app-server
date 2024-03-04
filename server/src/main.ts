import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // Define CORS options
  const corsOptions: CorsOptions = {
    origin: [
      'https://week-7-8-blogia-client.vercel.app',
      'https://week-7-blogia-admin.vercel.app',
      'https://blog-app-client-tau-eosin.vercel.app',
      'https://blog-app-admin-nine.vercel.app',
      'https://challenge-8-frontend.vercel.app',
      'http://localhost:3001',
      'http://localhost:3000'

    ], // or specify your frontend URL(s) here
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  };

  // Enable CORS with options
  app.enableCors(corsOptions);
  app.useGlobalPipes(new ValidationPipe());
  const port: number = 3006;
  await app.listen(port);
  console.log(`http://localhost:${port}`);
}
bootstrap();
