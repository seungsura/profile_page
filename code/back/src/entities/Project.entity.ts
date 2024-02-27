import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';

@Entity({name:'project'})
export class Project {
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
}
  