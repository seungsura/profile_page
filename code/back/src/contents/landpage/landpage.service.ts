import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/User.entity';

@Injectable()
export class LandpageService {
  getUsers(): { name: string }[] {
    // 데이터베이스에서 사용자 정보를 가져오는 로직
    const users = [{ name: 'User 1' }, { name: 'User 2' }, { name: 'User 3' }];
    return users;
  }
}
