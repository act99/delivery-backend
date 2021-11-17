import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { type } from 'os';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Users } from '../entities/users.entity';

// Picktype 는 PickType(가져오려는 클래스,가져오려는 property) 이렇게
@InputType()
export class LoginInput extends PickType(Users, ['email', 'password']) {}

@ObjectType()
export class LoginOutput extends CoreOutput {
  // token 을 리턴해야 함
  @Field((type) => String, { nullable: true })
  token?: string;
}
