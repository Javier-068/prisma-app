// app/api/products/save/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const data = await req.json();

        const product = await prisma.product.create({
            data: {
                sku: data.sku,
                name: data.name,
                description: data.description,
                image: data.image,
                price: data.price,
                stock: data.stock,
                active: data.active,
            },
        });

        return NextResponse.json(product);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Error al guardar producto" }, { status: 500 });
    }
}