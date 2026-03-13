import { NextRequest, NextResponse } from "next/server";
import { CreateCheckoutSessionUseCase } from "@/modules/orders/application/createCheckoutSession.use-case";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { items, customerEmail } = body;

    const useCase = new CreateCheckoutSessionUseCase();
    const session = await useCase.execute({
      items,
      customerEmail,
    });

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    console.error("Error al crear la sesión de checkout:", error);

    return NextResponse.json(
      { message: "No se pudo iniciar el pago" },
      { status: 500 }
    );
  }
}