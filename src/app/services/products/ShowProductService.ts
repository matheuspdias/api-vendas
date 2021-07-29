import Product from '@entities/Product';
import AppError from 'src/shared/errors/AppError';
import { ProductRepository } from 'src/app/repositories/ProductsRepository';
import { getCustomRepository } from 'typeorm';

interface IRequest {
  id: number;
}

class ShowProductService {
  public async execute({ id }: IRequest): Promise<Product> {
    const productRepository = getCustomRepository(ProductRepository);

    const product = await productRepository.findOne(id);

    if (!product) {
      throw new AppError('Product not found.');
    }

    return product;
  }
}

export default ShowProductService;
