import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentsModule } from './contents/contents.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   // DB 설정 관련 내용 기입
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'qwer1234',
    //   database: 'nest_prac',
    //   entities: [],
    //   synchronize: true,
    // }),
    ContentsModule,
  ],
  // 아래는 기본 모듈
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
