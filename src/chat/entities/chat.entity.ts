import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@InputType('ChatInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class Chat extends CoreEntity {
  //   @PrimaryGeneratedColumn()
  //   @Field((type) => Number)
  //   @IsNumber()
  //   id: number;

  //   @CreateDateColumn()
  //   @Field((type) => Date)
  //   createdAt: Date;

  @Field((type) => String)
  @Column()
  @IsString()
  user: string;

  @Field((type) => String)
  @Column()
  @IsString()
  text: string;
}
