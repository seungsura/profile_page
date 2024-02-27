import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentsModule } from './contents/contents.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/User.entity';
import { Project } from './entities/Project.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // DB 설정 관련 내용 기입
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'maria1025',
      database: 'profile',
      entities: [User,Project],
      synchronize: true,
      // dateStrings:'date' db가 date가 아니라 datetime으로 입력값을 요구하여 추가함
    }),
    ContentsModule
  ],
  // 아래는 기본 모듈
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
