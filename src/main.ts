import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerModule.setup(
    'api',
    app,
    SwaggerModule.createDocument(app, new DocumentBuilder().addOAuth2().build())
  );

  await app.listen(5173);
}

bootstrap();
