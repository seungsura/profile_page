import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Options } from '@nestjs/common';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config=new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('API docs')
    .setVersion('1.0.0')
    //.addCookieAuth('connect.sid')
    .build();
  const document=SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api-docs',app,document);
  
  const port=process.env.PORT||3000;
  await app.listen(port);
  console.log('listening to port: ${port}');

  if(module.hot){
    module.hot.accept();
    module.hot.dispose(()=>app.close());
  }
}
bootstrap();