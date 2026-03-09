import { Product } from "../domain/entities/product.entity";
import { ProductRepository } from "../domain/repositories/ProductRepository";


export class GetProductsUseCase {
    constructor(private readonly productRepository: ProductRepository) {

    }
    execute(): Promise<Product[]> {
        return this.productRepository.findAll();
    }
}