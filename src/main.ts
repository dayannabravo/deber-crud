import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const documetOptions = new DocumentBuilder()
  .setTitle('REST API')
  .setDescription('Api de criaturas ficticias')
  .setVersion('0.1')
  .build();

  const document = SwaggerModule.createDocument(app, documetOptions);
   SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
