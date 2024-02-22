import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentsModule } from './contents/contents.module';

@Module({
  imports: [ContentsModule],
  // 아래는 기본 모듈
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
