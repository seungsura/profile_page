import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers(): { name: string }[] {
    // 데이터베이스에서 사용자 정보를 가져오는 로직
    const users = [{ name: 'User 1' }, { name: 'User 2' }, { name: 'User 3' }];
    return users;
  }
}
