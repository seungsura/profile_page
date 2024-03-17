import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'uid' })
  uid: number;

  @ApiProperty({
    example: '1',
    description: 'Primary key ID',
  })
  @Column({ type: 'text' })
  short_intro: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  birth: string;

  @Column({ type: 'varchar' })
  phone: string;

  @Column({ type: 'varchar' })
  resume: string;

  // @OneToMany(
  //   (type) => Project,
  //   (Project) => Project.uid
  // )
  // project!: Project[]; // OneToMany는 생략 가능하므로 생략
}
