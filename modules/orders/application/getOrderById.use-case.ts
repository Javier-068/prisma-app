import { prisma } from "@/lib/prisma";

export class GetOrderByIdUseCase {
    async execute(orderId: string) {
        const order = await prisma.order.findUnique({
            where: { id: orderId },
            include: {
                orderdetail: { include: { product: true } },
                user: true,
            },
        });

        if (!order) throw new Error("Orden no encontrada");

        return order;
    }
}