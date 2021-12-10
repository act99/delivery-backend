import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatResolver } from './chat.resolver';
import { ChatService } from './chat.service';
import { Chat } from './entities/chat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Chat])],
  providers: [ChatResolver, ChatService],
})
export class ChatModule {}
