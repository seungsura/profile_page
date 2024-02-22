import { Module } from '@nestjs/common';
import { ContentsController } from './landpage.controller';
import { UserService } from './landpage.service';

@Module({
  controllers: [ContentsController],
  providers: [UserService],
})
export class UserModule {}
