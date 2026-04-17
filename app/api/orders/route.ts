import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// Crear pedido
export async function POST(req: Request) {
    try {
        const { items, email } = await req.json();

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
        }

        const order = await prisma.order.create({
            data: {
                id: crypto.randomUUID(),
                userId: user.id,
                status: "PENDING",
                createdAt: new Date(),
                total: items.reduce(
                    (acc: number, item: any) => acc + item.quantity * item.price,
                    0
                ),
                orderDetails: {   // ✅ CORREGIDO
                    create: items.map((item: any) => ({
                        id: crypto.randomUUID(),
                        productId: item.id,
                        quantity: item.quantity,
                        price: item.price,
                    })),
                },
            },
            include: { orderDetails: true }, // ✅ CORREGIDO
        });

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

// Mostrar pedidos
export async function GET(req: NextRequest) {
    try {
        const email = req.nextUrl.searchParams.get("email");
        const userId = req.nextUrl.searchParams.get("userId");
        const orderId = req.nextUrl.searchParams.get("orderId");

        if (orderId) {
            const order = await prisma.order.findUnique({
                where: { id: orderId },
                include: {
                    orderDetails: { include: { product: true } }, // ✅ CORREGIDO
                    user: true
                },
            });
            if (!order) {
                return NextResponse.json({ error: "Orden no encontrada" }, { status: 404 });
            }
            return NextResponse.json(order);
        }

        if (email) {
            const user = await prisma.user.findUnique({ where: { email } });
            if (!user) return NextResponse.json([]);
            const orders = await prisma.order.findMany({
                where: { userId: user.id },
                include: { orderDetails: { include: { product: true } } }, // ✅ CORREGIDO
                orderBy: { createdAt: "desc" },
            });
            return NextResponse.json(orders);
        }

        if (userId) {
            const orders = await prisma.order.findMany({
                where: { userId },
                include: { orderDetails: { include: { product: true } } }, // ✅ CORREGIDO
                orderBy: { createdAt: "desc" },
            });
            return NextResponse.json(orders);
        }

        const allOrders = await prisma.order.findMany({
            include: {
                orderDetails: { include: { product: true } }, // ✅ CORREGIDO
                user: true
            },
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(allOrders);
    } catch (err) {
        console.error("Error obteniendo pedidos:", err);
        return NextResponse.json({ error: "No se pudieron obtener los pedidos" }, { status: 500 });
    }
}
export async function PATCH(req: NextRequest) {
    try {
        const { orderId } = await req.json();

        const updated = await prisma.order.update({
            where: { id: orderId },
            data: { status: "DELIVERED" },
        });

        return NextResponse.json(updated);
    } catch (err) {
        console.error("Error actualizando estado:", err);
        return NextResponse.json({ error: "No se pudo actualizar el estado" }, { status: 500 });
    }
}

