import prisma from "@/lib/prisma";

import { OrderRepository } from "./orderRepository";
import { Order } from "../entities/order.entity";
import { OrderDetail } from "../entities/orderDetail.entity";

export class PrismaOrderRepository implements OrderRepository {
    async create(orderData: Omit<Order, "id" | "createdAt" | "updatedAt">, details: OrderDetail[]): Promise<Order> {
        return prisma.order.create({
            data: {
                userId: orderData.userId,
                status: orderData.status,
                total: orderData.total,
                details: {
                    create: details.map(d => ({
                        productId: d.productId,
                        quantity: d.quantity,
                        price: d.price,
                    })),
                },
            },
            include: { details: true, sale: true },
        });
    }

    async findById(id: string): Promise<Order | null> {
        return prisma.order.findUnique({
            where: { id },
            include: { details: true, sale: true },
        });
    }

    async updateStatus(id: string, status: Order["status"]): Promise<Order> {
        return prisma.order.update({
            where: { id },
            data: { status },
            include: { details: true, sale: true },
        });
    }

    async findByUser(userId: string): Promise<Order[]> {
        return prisma.order.findMany({
            where: { userId },
            include: { details: true, sale: true },
        });
    }
}