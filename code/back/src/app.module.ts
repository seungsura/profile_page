import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentsModule } from './contents/contents.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/User.entity';
import { Project } from './entities/Project.entity';
import { Career } from './entities/Career.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // DB 설정 관련 내용 기입
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'profile',
      entities: [User, Project, Career],
      synchronize: true,
    }),
    // 만든 모듈
    ContentsModule,
  ],
  // 아래는 기본 모듈
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
