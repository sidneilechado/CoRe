import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('seamstress')
export default class Seamstress {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: number;

  @Column()
  cpf: string;

  @Column()
  street: string;

  @Column()
  streetNumber: number;

  @Column()
  district: string;

  @Column()
  city: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
