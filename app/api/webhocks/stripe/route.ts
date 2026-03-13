import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import prisma from "@/lib/prisma";
import { SavePaidOrderUseCase } from "@/modules/orders/application/savePaid";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = (await headers()).get("stripe-signature");

  if (!signature) {
    return new NextResponse("Firma de Stripe no encontrada", { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (error) {
    console.error("Error verificando webhook:", error);
    return new NextResponse("Webhook inválido", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    try {
      const session = event.data.object as Stripe.Checkout.Session;

      const customerEmail = session.metadata?.customerEmail;
      const itemsRaw = session.metadata?.items;

      if (!customerEmail || !itemsRaw) {
        return NextResponse.json({ received: true });
      }

      const user = await prisma.user.findUnique({
        where: {
          email: customerEmail,
        },
      });

      if (!user) {
        throw new Error("Usuario no encontrado");
      }

      const items = JSON.parse(itemsRaw) as {
        id: string;
        name: string;
        price: number;
        quantity: number;
      }[];

      const total = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      const useCase = new SavePaidOrderUseCase();

      await useCase.execute({
        userId: user.id,
        items: items.map((item) => ({
          id: item.id,
          price: item.price,
          quantity: item.quantity,
        })),
        total,
      });
    } catch (error) {
      console.error("Error guardando la orden después del pago:", error);
      return new NextResponse("Error procesando pago", { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
}