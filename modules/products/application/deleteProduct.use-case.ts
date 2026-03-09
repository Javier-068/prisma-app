import { ProductRepository } from "../domain/repositories/ProductRepository";

export class DeleteProductUseCase {
    constructor(private readonly productRepository: ProductRepository) { 
        
    }

    execute(productId: string): Promise<void> {
        if (!productId) {
            throw new Error("El ID del producto es obligatorio para eliminarlo");
        }

        // Delegar la eliminación al repositorio
       return this.productRepository.delete(productId); 
    }
}