import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

import { User } from './User.entity';

@Entity({ name: 'career' })
export class Career {
  @PrimaryColumn({
    name: 'career',
    type: 'varchar',
  })
  index: number;

  @Column({ type: 'varchar' })
  period: string;

  @Column({ type: 'varchar' })
  subtitle: string;

  @Column({ type: 'varchar' })
  grade: string;

  @Column({ type: 'varchar' })
  image: string;

  @Column({ type: 'varchar' })
  url: string;

  @ManyToOne(() => User, (User) => User.uid)
  user!: User;
}
