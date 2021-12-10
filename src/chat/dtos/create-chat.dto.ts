import { InputType, ObjectType, OmitType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Chat } from '../entities/chat.entity';

@InputType()
export class CreateChatDto extends PickType(Chat, ['user', 'text']) {}

@ObjectType()
export class CreateChatDtoOutput extends CoreOutput {}
