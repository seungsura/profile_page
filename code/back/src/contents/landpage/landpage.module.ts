import { Module } from '@nestjs/common';
import { LandpageController } from './landpage.controller';
import { LandpageService } from './landpage.service';

@Module({
  controllers: [LandpageController],
  providers: [LandpageService],
})
export class LandpageModule {}
