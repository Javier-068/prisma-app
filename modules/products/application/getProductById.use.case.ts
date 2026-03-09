import { Product } from "../domain/entities/product.entity";
import { ProductRepository } from "../domain/repositories/ProductRepository";


export class GetProductByIdUseCase {
    constructor(private readonly productRepository: ProductRepository) {

    }
    execute(id: string): Promise<Product | null> {
        const product = this.productRepository.findById(id);

        if (!product) {
            throw new Error("Producto no encontrado");
        }
        return product;
    }

}