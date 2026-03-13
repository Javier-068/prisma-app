import { stripe } from "@/lib/stripe";
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

    if (!appUrl) {
      throw new Error("Falta NEXT_PUBLIC_APP_URL");
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: customerEmail,
      line_items: items.map((item) => ({
        quantity: item.quantity,
        price_data: {
          currency: "mxn",
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(item.price * 100),
        },
      })),
      metadata: {
        customerEmail,
        items: JSON.stringify(items),
      },
      success_url: `${appUrl}/sale/success`,
      cancel_url: `${appUrl}/sale/cart`,
    });

    return session;
  }
}