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

@Column()
type!: string;

@Column({ type: 'text' })
short_intro: string;

@Column({type: 'varchar'})
email: string;

@Column({type: 'varchar'})
name: string;

@Column({type:'varchar'})
birth: string;

@Column({type:'varchar'})
phone: string;

@Column({type:'varchar'})
resume: string;

@OneToMany(
  (type) => Project,
  (Project) => Project.uid
)
project!: Project[]; // 한 유저당 여러개의 project 생성

}