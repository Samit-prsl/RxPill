import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors({
    origin: '*',                   
  });
  const config = new DocumentBuilder()
  .setTitle('RxPill APIs')
  .setDescription('Use the base API URL as http://localhost:3000')
  .setTermsOfService('http://localhost:3000/terms-of-service')
  .addServer('http://localhost:3000')
  .setVersion('1.0').build()

  // Intantiate a Document
  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('api',app, document)

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
