import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try {
        const products = await prisma.product.findMany({
            orderBy: { createdAt: "desc" },
        });

        const product = products.map((p) => ({
            ...p,
            price: p.price, // mantener tal cual
            stock: p.stock, // mantener tal cual
            active: p.active ?? false,
            description: p.description || "Sin descripción",
            image: p.image || null,
        }));

        return NextResponse.json(product);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Error al obtener lista de productos" },
            { status: 500 }
        );
    }
}