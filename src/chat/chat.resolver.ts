import { Inject } from '@nestjs/common';
import { Mutation, Resolver, Query, Args, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { PUB_SUB } from 'src/common/common.constants';
import { ChatService } from './chat.service';
import { CreateChatDto, CreateChatDtoOutput } from './dtos/create-chat.dto';
import { Chat } from './entities/chat.entity';

@Resolver((of) => Chat)
export class ChatResolver {
  constructor(private readonly chatService: ChatService) {}
  @Query((returns) => [Chat])
  chats(): Promise<Chat[]> {
    return this.chatService.getChat();
  }
  @Mutation((returns) => CreateChatDtoOutput)
  async createChat(
    @Args('input') createChatDto: CreateChatDto,
  ): Promise<CreateChatDtoOutput> {
    return this.chatService.createChat(createChatDto);
  }
}

//** Subscription 이용할 때 */

// @Resolver((of) => Chat)
// export class ChatResolver {
//   constructor(
//     private readonly chatService: ChatService,
//     @Inject(PUB_SUB) private readonly pubSub: PubSub,
//   ) {}
//   @Query((returns) => [Chat])
//   chats(): Promise<Chat[]> {
//     return this.chatService.getChat();
//   }
//   @Mutation((returns) => Chat)
//   async createChat(
//     @Args('input') createChatDto: CreateChatDto,
//   ): Promise<CreateChatDto> {
//     const newChatMut = await this.chatService.createChat(createChatDto);
//     console.log(newChatMut);
//     this.pubSub.publish('newChat', { newChat: newChatMut });
//     return newChatMut;
//   }

//   @Subscription((returns) => Chat)
//   newChat() {
//     return this.pubSub.asyncIterator('newChat');
//   }
// }
