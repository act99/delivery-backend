import { ArgsType, Field, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Users } from '../entities/users.entity';

@ArgsType()
export class UserProfileInput {
  @Field((type) => Number)
  userId: number;
}

@ObjectType()
export class UserProfileOutput extends CoreOutput {
  @Field((type) => Users, { nullable: true })
  user?: Users;
}
