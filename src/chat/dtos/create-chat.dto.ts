import { InputType, OmitType, PickType } from '@nestjs/graphql';
import { Chat } from '../entities/chat.entity';

@InputType()
export class CreateChatDto extends PickType(Chat, ['user', 'text']) {}
