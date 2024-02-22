import { Injectable } from '@nestjs/common';

@Injectable()
export class ContentsService {
  getContents(): { ok: boolean; message: string } {
    return { ok: true, message: 'hello' };
  }
}
