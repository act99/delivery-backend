import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { type } from 'os';
import { MutationOutput } from 'src/common/dtos/output.dto';
import { Users } from '../entities/users.entity';

@InputType()
export class CreateAccountInput extends PickType(Users, [
  'email',
  'password',
  'role',
]) {}

@ObjectType()
export class CreateAccountOutput extends MutationOutput {}