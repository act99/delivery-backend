import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gs } from './entities/stock-gs.entity';
import { StockGsResolver } from './stock-gs.resolver';
import { StockGsService } from './stock-gs.service';

@Module({
  imports: [TypeOrmModule.forFeature([Gs])],
  providers: [StockGsResolver, StockGsService],
})
export class StockGsModule {}
