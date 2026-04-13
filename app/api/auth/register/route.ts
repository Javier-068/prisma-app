import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
    try {
        const { name, email, password, role, adminKey } = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json(
                { error: "Todos los campos son requeridos" },
                { status: 400 }
            );
        }

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return NextResponse.json(
                { error: "El correo ya está registrado" },
                { status: 400 }
            );
        }

        // Validación estricta del rol ADMIN
        if (role === "ADMIN") {
            if (adminKey !== process.env.ADMIN_SECRET) {
                return NextResponse.json(
                    { error: "Clave de administrador incorrecta" },
                    { status: 401 }
                );
            }
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role, // 👈 ahora sí respeta el rol enviado
            },
        });

        return NextResponse.json(
            { message: "Usuario registrado con éxito", user },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error en registro:", error);
        return NextResponse.json(
            { error: "Error al registrar usuario" },
            { status: 500 }
        );
    }
}