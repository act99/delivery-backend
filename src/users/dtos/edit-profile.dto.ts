import { InputType, ObjectType, PartialType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Users } from '../entities/users.entity';

@ObjectType()
export class EditProfileOutput extends CoreOutput {}

// entity 의 몇개의 property를 '수정' 하려할 땐 PartialType 을 써서 optional 하게 해줘야 함
@InputType()
export class EditProfileInput extends PartialType(
  PickType(Users, ['email', 'password']),
) {}
