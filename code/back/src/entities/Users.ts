import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  //import { Project } from './projects.entity';
  import { ApiProperty } from '@nestjs/swagger';
  
  @Entity({schema:'nesttest',name:'users'})
  export class User {
    @PrimaryGeneratedColumn({type: 'int', name: 'uid'})
    uid: number;
  
    @ApiProperty({
      example: '1',
      description: 'Primary key ID',
    })

    @Column({ type: 'text' })
    selfintro: string;
  
    @Column({ unique: true })
    email: string;
  
    @Column()
    nickname: string;
  
    @Column()
    password: string;
  
    @OneToMany(() => Project, (record) => record.uid)
    records: Record[];                         // 한 유저당 여러개의 record 생성
  }
  