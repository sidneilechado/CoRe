import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinColumn,
} from 'typeorm';

import Seamstress from './Seamstress';

@Entity('reference')
export default class Reference {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Seamstress)
  @JoinColumn({ name: 'id' })
  seamstress: Seamstress;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
