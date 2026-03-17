import { prisma } from "@/lib/prisma";

interface CreateOrderInput {
    userId: string;
    items: { id: string; quantity: number; price: number }[];
}

export class CreateOrderUseCase {
    async execute({ userId, items }: CreateOrderInput) {
        if (!items || items.length === 0) {
            throw new Error("El carrito está vacío");
        }

        const total = items.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );

        const order = await prisma.order.create({
            data: {
                id: crypto.randomUUID(),
                userId,
                total,
                status: "PENDING",
                orderdetail: {
                    create: items.map((item) => ({
                        id: crypto.randomUUID(),
                        productId: item.id,
                        quantity: item.quantity,
                        price: item.price,
                    })),
                },
            },
            include: { orderdetail: true },
        });

        // Descontar stock
        for (const item of items) {
            await prisma.product.update({
                where: { id: item.id },
                data: { stock: { decrement: item.quantity } },
            });
        }

        return order;
    }
}