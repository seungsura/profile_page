import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';
import { User } from './User.entity';

@Entity({ name: 'project' })
export class Project {
  @PrimaryColumn({
    name: 'pname',
    type: 'varchar',
  })
  @ApiProperty({
    example: '1',
    description: 'Primary key ID',
  })
  @ManyToOne(() => User, (User) => User.uid)
  user!: User;

  @Column({ type: 'varchar' })
  period: string;

  @Column({ type: 'varchar' })
  category: string;

  @Column({ type: 'varchar' })
  image: string;

  @Column({ type: 'varchar' })
  h_image: string;

  @Column({ type: 'varchar' })
  stack: string;

  @Column({ type: 'varchar' })
  purl: string;
}
