import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Verification } from './entities/verification.entity';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Verification])],
  providers: [UsersService, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}
