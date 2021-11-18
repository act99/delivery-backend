import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, isString } from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Users } from 'src/users/entities/users.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.entity';

// 만약 dto 부분에 omittype에 inputtype 으로 호출하라 라는 명령어가 없다면 아래를 써줘야함.
// @InputType({isAbstract:true})
// @Field() => 얘는 graphql 데코레이션이며
// @Column(), @ManyToOne() => 얘는 typeorm 데코레이션임
@InputType('RestaurantInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class Restaurant extends CoreEntity {
  @Field((type) => String)
  @Column()
  @IsString()
  name: string;

  @Field((type) => String)
  @Column()
  @IsString()
  coverImg: string;

  @Field((type) => String)
  @Column()
  @IsString()
  address: string;

  @Field((type) => Category, { nullable: true })
  @ManyToOne((type) => Category, (category) => category.restaurants, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  category: Category;

  @Field((type) => Users)
  @ManyToOne((type) => Users, (user) => user.restaurants)
  owner: Users;
}
