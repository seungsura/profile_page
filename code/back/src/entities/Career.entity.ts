import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';
import { User } from './User.entity';

@Entity({name:'career'})
export class Career {
@PrimaryColumn({ 
    name: 'career',
    type: 'varchar'
  })

// @ApiProperty({
//   example: '1',
//   description: 'Primary key ID',
// })

@Column({type: 'varchar'})
period: string;

@Column({type: 'varchar'})
subtitle: string;

@Column({type:'varchar'})
grade: string;

@Column({type:'varchar'})
image: string;

@Column({type:'varchar'})
url: string;

@ManyToOne(
  ()=>User,
  (User)=>User.uid
  )
  user!:User;
}
