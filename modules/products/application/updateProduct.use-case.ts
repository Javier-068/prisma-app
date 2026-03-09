// application/usecases/UpdateProductUseCase.ts

import { Product } from "@prisma/client";
import { ProductRepository } from "../domain/repositories/ProductRepository";

export class UpdateProductUseCase {
    constructor(private readonly productRepository: ProductRepository) { }

    async execute(id: string, data: Partial<Product>): Promise<Product | null> {
        return this.productRepository.update(id, data);
    }
}