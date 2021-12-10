import { Query, Resolver } from '@nestjs/graphql';
import { Gs } from './entities/stock-gs.entity';
import { StockGsService } from './stock-gs.service';

@Resolver((of) => Gs)
export class StockGsResolver {
  constructor(private readonly stockGsService: StockGsService) {}
  @Query((returns) => [Gs])
  gsStock(): Promise<Gs[]> {
    return this.stockGsService.getStock();
  }
}
