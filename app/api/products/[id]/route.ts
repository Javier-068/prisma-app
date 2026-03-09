// app/api/products/[id]/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Obtener un producto por ID
export async function GET(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;

    try {
        const product = await prisma.product.findUnique({
            where: { id },
        });

        if (!product) {
            return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });
        }

        return NextResponse.json(product);
    } catch (error) {
        console.error("Error en GET /api/products/[id]:", error);
        return NextResponse.json({ error: "Error al obtener producto" }, { status: 500 });
    }
}

// Actualizar un producto por ID
export async function PUT(
    req: Request,
    context: { params: Promise<{ id: string }> } // 👈 igual que GET y DELETE
) {
    const { id } = await context.params; // 👈 usar await

    try {
        const data = await req.json();

        const product = await prisma.product.update({
            where: { id },
            data,
        });

        return NextResponse.json(product);
    } catch (error: any) {
        console.error("Error en PUT /api/products/[id]:", error);

        if (error.code === "P2025") {
            return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });
        }

        return NextResponse.json({ error: "Error al actualizar producto" }, { status: 500 });
    }
}

// Eliminar un producto por ID
export async function DELETE(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;

    console.log("ID recibido en DELETE:", id);

    try {
        const product = await prisma.product.delete({
            where: { id },
        });

        return NextResponse.json({ message: "Producto eliminado", product });
    } catch (error: any) {
        console.error("Error en DELETE /api/products/[id]:", error);

        if (error.code === "P2025") {
            return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });
        }

        return NextResponse.json({ error: "Error al eliminar producto" }, { status: 500 });
    }
}