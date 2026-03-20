import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { CheckoutItemEntity } from "../domain/entities/checkoutItem.entity";

interface CreateCheckoutSessionInput {
  items: CheckoutItemEntity[];
  customerEmail: string;
}

export class CreateCheckoutSessionUseCase {
  async execute({ items, customerEmail }: CreateCheckoutSessionInput) {
    if (!items || items.length === 0) {
      throw new Error("El carrito está vacío");
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL;
    if (!appUrl) throw new Error("Falta NEXT_PUBLIC_APP_URL");

    // Buscar usuario
    const user = await prisma.user.findUnique({
      where: { email: customerEmail },
    });
    if (!user) throw new Error("Usuario no encontrado");

    // Validar stock antes de crear la orden
    for (const item of items) {
      const product = await prisma.product.findUnique({ where: { id: item.id } });
      if (!product || product.stock < item.quantity) {
        throw new Error(`Stock insuficiente para ${item.name}`);
      }
    }

    // Calcular total
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    // Crear orden y descontar stock en una transacción
    const order = await prisma.$transaction(async (tx) => {
      const newOrder = await tx.order.create({
        data: {
          id: crypto.randomUUID(),
          userId: user.id,
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
      });

      for (const item of items) {
        await tx.product.update({
          where: { id: item.id },
          data: { stock: { decrement: item.quantity } },
        });
      }

      return newOrder;
    });

    // Crear sesión de Stripe
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: customerEmail,
      line_items: items.map((item) => ({
        quantity: item.quantity,
        price_data: {
          currency: "mxn",
          product_data: { name: item.name },
          unit_amount: Math.round(item.price * 100),
        },
      })),
      metadata: {
        orderId: order.id, // importante para el webhook
      },
      success_url: `${appUrl}/orders/success?orderId=${order.id}`,
      cancel_url: `${appUrl}/sale/cart`,
    });

    return session;
  }
}