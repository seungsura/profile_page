import {
Column,
Entity,
OneToMany,
PrimaryGeneratedColumn,
} from 'typeorm';
import { Project } from './Project.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({name:'users'})
export class User {
@PrimaryGeneratedColumn({type: 'int', name: 'uid'})
uid: number;

@ApiProperty({
  example: '1',
  description: 'Primary key ID',
})

@Column({ type: 'text' })
short_intro: string;

@Column({type: 'varchar'})
email: string;

@Column({type: 'varchar'})
name: string;

// @Column()
// birth: Date; //데이터 타입 date가 datetime으로 자동 변환되며 DB 입력 시 오류 발생

@Column({type:'int'})
phone: number;

@Column({type:'varchar'})
resume: string;

@OneToMany(() => Project, (Project) => Project.uid)
project: Project[];                         // 한 유저당 여러개의 project 생성

}
