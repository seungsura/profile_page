import { Controller, Get } from '@nestjs/common';
import { UserService } from './landpage.service';

@Controller('contents')
export class ContentsController {
  constructor(private readonly contentsService: UserService) {}

  @Get()
  getContents(): { name: string }[] {
    return this.contentsService.getUsers();
  }
}
