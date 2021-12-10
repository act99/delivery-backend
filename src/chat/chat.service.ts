import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChatDto } from './dtos/create-chat.dto';
import { Chat } from './entities/chat.entity';

export class ChatService {
  constructor(
    @InjectRepository(Chat) private readonly chats: Repository<Chat>,
  ) {}
  getChat(): Promise<Chat[]> {
    return this.chats.find();
  }
  createChat(createChatDto: CreateChatDto): Promise<Chat> {
    const newChat = this.chats.create(createChatDto);
    return this.chats.save(newChat);
  }
}
