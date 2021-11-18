import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Verification } from './entities/verification.entity';
import { UserResolver } from './users.resolver';
import { UserService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Verification])],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UsersModule {}
