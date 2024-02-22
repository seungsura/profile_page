import { Module } from '@nestjs/common';
import { ContentsController } from './contents.controller';
import { ContentsService } from './contents.service';
import { LandpageModule } from './landpage/landpage.module';

@Module({
  imports: [LandpageModule],
  controllers: [ContentsController],
  providers: [ContentsService],
})
export class ContentsModule {}
