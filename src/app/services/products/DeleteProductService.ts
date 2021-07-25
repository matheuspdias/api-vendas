import AppError from 'src/shared/errors/AppError';
import { ProductRepository } from 'src/app/repositories/ProductsRepository';
import { getCustomRepository } from 'typeorm';

interface IRequest {
  id: number;
}

class DeleteProductService {
  public async execute({ id }: IRequest): Promise<void> {
    const productRepository = getCustomRepository(ProductRepository);

    const product = await productRepository.findOne(id);

    if (!product) {
      throw new AppError('Product not found.');
    }

    await productRepository.remove(product);
  }
}

export default DeleteProductService;
