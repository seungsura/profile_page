import { Controller, Get } from '@nestjs/common';
import { ContentsService } from './contents.service';

@Controller('contents')
export class ContentsController {
  constructor(private readonly contentsService: ContentsService) {}

  @Get()
  getContents(): { ok: boolean; message: string } {
    return this.contentsService.getContents();
  }
}
