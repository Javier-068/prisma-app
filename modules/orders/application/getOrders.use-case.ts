import { prisma } from "@/lib/prisma";

export class GetOrdersUseCase {
    async execute(userId: string) {
        const orders = await prisma.order.findMany({
            where: { userId },
            include: {
                orderdetail: { include: { product: true } },
            },
            orderBy: { createdAt: "desc" },
        });

        return orders;
    }
}