import prisma from "@/lib/prisma";

interface SavePaidOrderInput {
  userId: string;
  items: {
    id: string;
    price: number;
    quantity: number;
  }[];
  total: number;
}

export class SavePaidOrderUseCase {
  async execute({ userId, items, total }: SavePaidOrderInput) {
    const order = await prisma.order.create({
      data: {
        userId,
        total,
        status: "CONFIRMED",
        orderdetail: {
          create: items.map((item) => ({
            productId: item.id,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: {
        orderdetail: true,
      },
    });

    return order;
  }
}