import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { urlencoded, json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors()

  // Up limits
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));

  const options = new DocumentBuilder()
      .setTitle('LCB Portal')
      .setDescription('API interface for LCB Portal')
      .setVersion('1.0')
      .addBearerAuth()
      .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);



  await app.listen(3000, () => {
    Logger.log('Listening at http://localhost:' + 3000 + '/' + 'api');
    Logger.log('Documentation at http://localhost:3000/docs')
  });
}
bootstrap();
