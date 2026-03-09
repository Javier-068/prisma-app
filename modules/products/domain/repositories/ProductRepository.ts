// ProductRepository.ts

import { Product } from "@/generated/prisma/client";


export interface ProductRepository {
    create(product: Product): Promise<Product>;

    findById(id: string): Promise<Product | null>;

    findAll(): Promise<Product[]>;

    update(id: string, data: Partial<Product>): Promise<Product | null>;
    
    delete(id: string): Promise<void>;
}