import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, isString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// 만약 dto 부분에 omittype에 inputtype 으로 호출하라 라는 명령어가 없다면 아래를 써줘야함.
// @InputType({isAbstract:true})

@ObjectType()
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;

  @Field((type) => String)
  @Column()
  @IsString()
  name: string;
  @Field((type) => Boolean, { defaultValue: true })
  @Column({ default: true })
  @IsBoolean()
  @IsOptional()
  isVegan?: Boolean;
  @Field((type) => String)
  @Column()
  @IsString()
  address: string;
  @Field((type) => String)
  @Column()
  @IsString()
  ownerName: string;
  @Field((type) => String)
  @Column()
  @IsString()
  categoryName: string;
}
