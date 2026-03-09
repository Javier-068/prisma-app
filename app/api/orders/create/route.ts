import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { items } = await req.json();
        // items: [{ id: string, quantity: number }]

        const order = await prisma.order.create({
            data: {
                status: "PENDING",
                createdAt: new Date(),
                items: {
                    create: items.map((item: any) => ({
                        productId: item.id,
                        quantity: item.quantity,
                    })),
                },
            },
            include: { items: true },
        });

        // Descontar stock
        for (const item of items) {
            await prisma.product.update({
                where: { id: item.id },
                data: { stock: { decrement: item.quantity } },
            });
        }

        return NextResponse.json({ message: "Pedido creado", order });
    } catch (err) {
        console.error("Error creando pedido:", err);
        return NextResponse.json({ error: "No se pudo crear el pedido" }, { status: 500 });
    }
}