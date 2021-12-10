import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gs } from './entities/stock-gs.entity';

export class StockGsService {
  constructor(@InjectRepository(Gs) private readonly stockGs: Repository<Gs>) {}
  getStock(): Promise<Gs[]> {
    return this.stockGs.find();
  }
}
