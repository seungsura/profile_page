import { Controller, Get } from '@nestjs/common';
import { LandpageService } from './landpage.service';

@Controller('contents/landpage')
export class LandpageController {
  constructor(private readonly landpageService: LandpageService) {}

  @Get()
  getUsers(): { name: string }[] {
    // LandpageService 사용하여 사용자 정보를 가져옴
    return this.landpageService.getUsers();
  }
}
