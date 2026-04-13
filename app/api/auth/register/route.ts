import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, role, adminKey } = body;

    if (!name || !email || !password || !role) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    // Validar rol permitido
    if (role !== "USER" && role !== "ADMIN") {
      return NextResponse.json(
        { error: "Rol no válido" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "El correo ya está registrado" },
        { status: 400 }
      );
    }

    let finalRole: "USER" | "ADMIN" = "USER";

    if (role === "ADMIN") {
      if (!adminKey) {
        return NextResponse.json(
          { error: "Debes ingresar la clave de administrador" },
          { status: 400 }
        );
      }

      if (!process.env.ADMIN_SECRET) {
        return NextResponse.json(
          { error: "La clave secreta del servidor no está configurada" },
          { status: 500 }
        );
      }

      if (adminKey !== process.env.ADMIN_SECRET) {
        return NextResponse.json(
          { error: "Clave de administrador incorrecta" },
          { status: 403 }
        );
      }

      finalRole = "ADMIN";
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: finalRole,
      },
    });

    return NextResponse.json(
      {
        message: "Usuario registrado con éxito",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
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