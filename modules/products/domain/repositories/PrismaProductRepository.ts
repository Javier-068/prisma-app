import prisma from "@/lib/prisma";
import { ProductRepository } from "./ProductRepository";
import { Product } from "@/generated/prisma/client";


export class PrismaProductRepository implements ProductRepository {
    async create(product: Product): Promise<Product> {
        const created = await prisma.product.create({
            data: {
                sku: product.sku,
                name: product.name,
                description: product.description,
                image: product.image,
                price: product.price,
                stock: product.stock,
                active: product.active ?? true,
            },
        });
        return created;
    }

    async findById(id: string): Promise<Product | null> {
        return prisma.product.findUnique({
            where: { id },
        });
    }

    async findAll(): Promise<Product[]> {
        return prisma.product.findMany();
    }

    async update(id: string, product: Partial<Product>): Promise<Product | null> {
        const updated = await prisma.product.update({
            where: { id },
            data: {
                sku: product.sku,
                name: product.name,
                description: product.description,
                image: product.image,
                price: product.price,
                stock: product.stock,
                active: product.active,
            },
        });
        return updated;
    }

    async delete(id: string): Promise<void> {
        await prisma.product.delete({
            where: { id },
        });
    }
}