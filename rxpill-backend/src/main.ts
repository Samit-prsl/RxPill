import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Nest JS Learning')
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
