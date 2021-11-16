import { Field } from '@nestjs/graphql';
import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class CoreEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;
  @CreateDateColumn()
  @Field((type) => Date)
  createAt: Date;
  @UpdateDateColumn()
  @Field((type) => Date)
  updateAt: Date;
}
