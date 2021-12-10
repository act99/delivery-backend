import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChatDto, CreateChatDtoOutput } from './dtos/create-chat.dto';
import { Chat } from './entities/chat.entity';

export class ChatService {
  constructor(
    @InjectRepository(Chat) private readonly chats: Repository<Chat>,
  ) {}
  getChat(): Promise<Chat[]> {
    return this.chats.find();
  }
  async createChat({
    user,
    text,
  }: CreateChatDto): Promise<CreateChatDtoOutput> {
    try {
      await this.chats.save(this.chats.create({ user, text }));
      return { ok: true };
    } catch (e) {
      return { ok: false, error: 'Error!! Chatting Error!' };
    }
  }
}
