import { InputType, ObjectType, PartialType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Users } from '../entities/users.entity';

@ObjectType()
export class DeleteProfileOutput extends CoreOutput {}

@InputType()
export class DeleteProfileInput extends PartialType(
  PickType(Users, ['password']),
) {}
