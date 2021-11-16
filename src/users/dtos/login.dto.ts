import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { type } from 'os';
import { MutationOutput } from 'src/common/dtos/output.dto';
import { Users } from '../entities/users.entity';

@InputType()
export class LoginInput extends PickType(Users, ['email', 'password']) {}

@ObjectType()
export class LoginOutput extends MutationOutput {
  // token 을 리턴해야 함
  @Field((type) => String, { nullable: true })
  token?: string;
}
