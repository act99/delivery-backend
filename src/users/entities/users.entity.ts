import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { BeforeInsert, Column, Entity } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';
import { IsEmail, IsEnum, IsString } from 'class-validator';

enum UserRole {
  Client,
  Owner,
  Delivery,
}

registerEnumType(UserRole, { name: 'UserRole' });

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class Users extends CoreEntity {
  @Column()
  @Field((type) => String)
  @IsEmail()
  email: string;
  @Column()
  @Field((type) => String)
  @IsString()
  password: string;
  @Column({ type: 'enum', enum: UserRole })
  @Field((type) => UserRole)
  @IsEnum(UserRole)
  role: UserRole;

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    try {
      this.password = await bcrypt.hash(this.password, 10);
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException();
    }
  }
  // aPassword => 유저가 보낸 패스워드 데이터
  async checkPassword(aPassword: string): Promise<boolean> {
    try {
      // bcrypt 를 이용해 유저가 보낸 패스워드와 데이터 상에 저장되어있는 해쉬 패스워드를 비교한 후, 리턴해주기
      const comparePassword = await bcrypt.compare(aPassword, this.password);
      return comparePassword;
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException();
    }
  }
}
