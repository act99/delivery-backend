import { Field, Float, InputType, ObjectType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  isString,
} from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Users } from 'src/users/entities/users.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

// 만약 dto 부분에 omittype에 inputtype 으로 호출하라 라는 명령어가 없다면 아래를 써줘야함.
// @InputType({isAbstract:true})
// @Field() => 얘는 graphql 데코레이션이며
// @Column(), @ManyToOne() => 얘는 typeorm 데코레이션임
@ObjectType()
@Entity()
export class Gs {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  @IsNumber()
  id: number;

  @Field((type) => Number)
  @Column()
  @IsString()
  index: number;
  @Field((type) => Number)
  @Column()
  @IsNumber()
  date: number;

  @Field((type) => String)
  @Column()
  @IsString()
  check_item: string;

  @Field((type) => Number)
  @Column()
  @IsNumber()
  code: number;

  @Field((type) => String)
  @Column()
  @IsString()
  code_name: string;

  @Field((type) => Float)
  @Column('float')
  @IsNumber()
  d1_diff_rate: number;

  @Field((type) => Number)
  @Column()
  @IsNumber()
  close: number;

  @Field((type) => Number)
  @Column()
  @IsNumber()
  open: number;

  @Field((type) => Number)
  @Column()
  @IsNumber()
  high: number;

  @Field((type) => Number)
  @Column()
  @IsNumber()
  low: number;

  @Field((type) => Number)
  @Column()
  @IsNumber()
  volume: number;
  @Field((type) => Number)
  @Column()
  @IsNumber()
  clo5: number;
  @Field((type) => Number)
  @Column()
  @IsNumber()
  clo10: number;
  @Field((type) => Number)
  @Column()
  @IsNumber()
  clo20: number;
  @Field((type) => Number)
  @Column()
  @IsNumber()
  clo40: number;
  @Field((type) => Number)
  @Column()
  @IsNumber()
  clo60: number;
  @Field((type) => Number)
  @Column()
  @IsNumber()
  clo80: number;
  @Field((type) => Number)
  @Column()
  @IsNumber()
  clo100: number;
  @Field((type) => Number)
  @Column()
  @IsNumber()
  clo120: number;
  @Field((type) => Float)
  @Column('float')
  @IsNumber()
  clo5_diff_rate: number;
  @Field((type) => Float)
  @Column('float')
  @IsNumber()
  clo10_diff_rate: number;
  @Field((type) => Float)
  @Column('float')
  @IsNumber()
  clo20_diff_rate: number;
  @Field((type) => Float)
  @Column('float')
  @IsNumber()
  clo40_diff_rate: number;
  @Field((type) => Float)
  @Column('float')
  @IsNumber()
  clo60_diff_rate: number;
  @Field((type) => Float)
  @Column('float')
  @IsNumber()
  clo80_diff_rate: number;
  @Field((type) => Float)
  @Column('float')
  @IsNumber()
  clo100_diff_rate: number;
  @Field((type) => Float)
  @Column('float')
  @IsNumber()
  clo120_diff_rate: number;
  @Field((type) => Number)
  @Column()
  @IsNumber()
  yes_clo5: number;
  @Field((type) => Number)
  @Column()
  @IsNumber()
  yes_clo10: number;
  @Field((type) => Number)
  @Column()
  @IsNumber()
  yes_clo20: number;
  @Field((type) => Number)
  @Column()
  @IsNumber()
  yes_clo40: number;
  @Field((type) => Number)
  @Column()
  @IsNumber()
  yes_clo60: number;
  @Field((type) => Number)
  @Column()
  @IsNumber()
  yes_clo80: number;
  @Field((type) => Number)
  @Column()
  @IsNumber()
  yes_clo100: number;
  @Field((type) => Number)
  @Column()
  @IsNumber()
  yes_clo120: number;
  @Field((type) => Number)
  @Column()
  @IsNumber()
  vol5: number;
  @Field((type) => Number)
  @Column()
  @IsNumber()
  vol10: number;
  @Field((type) => Number)
  @Column()
  @IsNumber()
  vol20: number;
  @Field((type) => Number)
  @Column()
  @IsNumber()
  vol40: number;
  @Field((type) => Number)
  @Column()
  @IsNumber()
  vol60: number;
  @Field((type) => Number)
  @Column()
  @IsNumber()
  vol80: number;
  @Field((type) => Number)
  @Column()
  @IsNumber()
  vol100: number;
  @Field((type) => Number)
  @Column()
  @IsNumber()
  vol120: number;
}
