import { Product } from "@prisma/client";
import { ProductRepository } from "../domain/repositories/ProductRepository";


export class CreateProductUseCase {
    constructor(private readonly productRepository: ProductRepository) {
    }
    execute(product: Product): Promise<Product> {
        return this.productRepository.create(product);
    }

}
