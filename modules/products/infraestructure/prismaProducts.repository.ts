import prisma from "@/lib/prisma";
import { Product } from "@prisma/client";
import { ProductRepository } from "../domain/repositories/ProductRepository";

export class PrismaProductRepository implements ProductRepository {
    async create(product: Omit<Product, "id" | "createdAt" | "updatedAt">): Promise<Product> {
        return prisma.product.create({ data: product });
    }

    async findById(id: string): Promise<Product | null> {
        return prisma.product.findUnique({ where: { id } });
    }

    async findAll(): Promise<Product[]> {
        return prisma.product.findMany();
    }

    async update(id: string, data: Partial<Product>): Promise<Product | null> {
        return prisma.product.update({ where: { id }, data });
    }

    async delete(id: string): Promise<void> {
        await prisma.product.delete({ where: { id } });
    }
}