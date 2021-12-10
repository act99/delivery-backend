import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dtos/create-chat.dto';
import { Chat } from './entities/chat.entity';

@Resolver((of) => Chat)
export class ChatResolver {
  constructor(private readonly chatService: ChatService) {}
  @Query((returns) => [Chat])
  chats(): Promise<Chat[]> {
    return this.chatService.getChat();
  }
  @Mutation((returns) => Boolean)
  async createChat(
    @Args('input') createChatDto: CreateChatDto,
  ): Promise<boolean> {
    try {
      await this.chatService.createChat(createChatDto);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
