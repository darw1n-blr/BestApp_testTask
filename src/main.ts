import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from "node:process";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 9000
  app.enableCors();
  await app.listen(PORT);
  console.log(`Listening on port ${PORT}`)
}
bootstrap();
