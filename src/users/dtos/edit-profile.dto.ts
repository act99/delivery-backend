import { InputType, ObjectType, PartialType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Users } from '../entities/users.entity';

@ObjectType()
export class EditProfileOutput extends CoreOutput {}

@InputType()
export class EditProfileInput extends PartialType(
  PickType(Users, ['email', 'password']),
) {}
