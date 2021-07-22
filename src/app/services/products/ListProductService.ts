import Product from '@models/Product';
import { ProductRepository } from 'src/app/repositories/ProductsRepository';
import { getCustomRepository } from 'typeorm';

class ListProductService {
  public async execute(): Promise<Product[]> {
    const productRepository = getCustomRepository(ProductRepository);

    const products = productRepository.find({});

    return products;
  }
}

export default ListProductService;
