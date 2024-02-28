import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  import { ApiProperty } from '@nestjs/swagger';
  import { User } from './User.entity';
  
  @Entity({name:'career'})
  export class Career {
  @PrimaryGeneratedColumn({type: 'int', name: 'uid'})
  uid: number;
  
  @ApiProperty({
    example: '1',
    description: 'Primary key ID',
  })
  
  
  @Column({type: 'varchar'})
  pname: string;
  
  @Column({type: 'varchar'})
  period: string;
  
  @Column({type: 'varchar'})
  pkind: string;
  
  @Column({type:'varchar'})
  plink: string;
  
  @ManyToOne(
    (type)=>User,
    (User)=>User.uid
    )
    user!:User;
  }
  