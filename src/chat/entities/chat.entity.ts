import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';
import { isNullableType } from 'graphql';
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
  @Field((type) => String)
  @Column()
  @IsString()
  user: string;

  @Field((type) => String)
  @Column()
  @IsString()
  text: string;
}
