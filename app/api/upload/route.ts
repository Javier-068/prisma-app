import { NextRequest, NextResponse } from "next/server";
import { cloudinary } from "@/lib/cloudinary";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "No se envió archivo" }, { status: 400 });
        }

        // Convertir File a Buffer
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Subir a Cloudinary
        const result = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({ folder: "products" }, (error, uploadResult) => {
                if (error) reject(error);
                else {
                    console.log("Cloudinary result:", uploadResult); // 👈 revisa aquí
                    resolve(uploadResult);
                }
            }).end(buffer);
        });

        return NextResponse.json({ url: (result as any).secure_url });
    } catch (error) {
        console.error("Error subiendo imagen:", error);
        return NextResponse.json({ error: "Error al subir imagen" }, { status: 500 });
    }
}