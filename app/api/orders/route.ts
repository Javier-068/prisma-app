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
                orderdetail: {
                    create: items.map((item: any) => ({
                        id: crypto.randomUUID(),
                        productId: item.id,
                        quantity: item.quantity,
                        price: item.price,
                    })),
                },
            },
            include: { orderdetail: true },
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
                include: { orderdetail: { include: { product: true } }, user: true },
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
                include: { orderdetail: { include: { product: true } } },
                orderBy: { createdAt: "desc" },
            });
            return NextResponse.json(orders);
        }

        if (userId) {
            const orders = await prisma.order.findMany({
                where: { userId },
                include: { orderdetail: { include: { product: true } } },
                orderBy: { createdAt: "desc" },
            });
            return NextResponse.json(orders);
        }

        const allOrders = await prisma.order.findMany({
            include: { orderdetail: { include: { product: true } }, user: true },
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(allOrders);
    } catch (err) {
        console.error("Error obteniendo pedidos:", err);
        return NextResponse.json({ error: "No se pudieron obtener los pedidos" }, { status: 500 });
    }
}