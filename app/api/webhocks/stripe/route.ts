import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

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
      const orderId = session.metadata?.orderId;

      if (!orderId) {
        console.error("No se encontró orderId en metadata");
        return NextResponse.json({ received: true });
      }

      await prisma.order.update({
        where: { id: orderId },
        data: { status: "CONFIRMED" },
      });

    } catch (error) {
      console.error("Error actualizando la orden:", error);
      return new NextResponse("Error procesando pago", { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
}