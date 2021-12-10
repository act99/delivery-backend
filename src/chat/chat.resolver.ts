import { Mutation, Resolver, Query, Args, Subscription } from '@nestjs/graphql';
import { ChatService } from './chat.service';
import { CreateChatDto, CreateChatDtoOutput } from './dtos/create-chat.dto';
import { Chat } from './entities/chat.entity';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

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
  @Subscription(() => Chat, {
    resolve: ({ newChat }) => newChat,
  })
  async newChat() {
    return pubSub.asyncIterator('subscriptions');
  }
}

// chatSubscription() {
//     subscribe: (parent, args, { pubSub }) => {
//       const channel = Math.random().toString(36).slice(2, 15);
//       onMessagesUpdates(() => pubSub.publish(channel, { messages }));
//       setTimeout(() => pubSub.publish(channel, { messages }), 0);
//     };
//     return pubSub.asyncIterator(`${channel}`);
//   }
