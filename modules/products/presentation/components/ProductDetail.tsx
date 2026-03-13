"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

interface Product {
    id: string;
    sku: string;
    name: string;
    description?: string | null;
    image?: string | null;
    price: number;
    stock: number;
    active: boolean;
}

export default function ProductDetail({ id }: { id: string }) {
    const [product, setProduct] = useState<Product | null>(null);
    const { data: session, status } = useSession();

    useEffect(() => {
        async function fetchProduct() {
            const res = await fetch(`/api/products/${id}`);
            const data = await res.json();
            setProduct(data);
        }
        fetchProduct();
    }, [id]);

    if (!product)
        return (
            <p className="text-center mt-10 text-gray-700">
                Cargando producto...
            </p>
        );

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-5xl bg-white rounded-xl shadow-2xl mx-auto overflow-hidden">
                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-96 w-full object-cover"
                    />
                ) : (
                    <div className="h-96 w-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold text-2xl">
                        Sin imagen
                    </div>
                )}

                <div className="p-10 space-y-6">
                    <h2 className="text-4xl font-bold text-gray-900">{product.name}</h2>

                    <p className="text-lg text-gray-700">
                        {product.description || "Sin descripción"}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                        <div>
                            <p className="text-sm text-gray-500">Precio</p>
                            <p className="text-xl font-semibold text-green-600">
                                ${product.price} MXN
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Stock</p>
                            <p className="text-xl font-semibold text-gray-800">
                                {product.stock}
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">SKU</p>
                            <p className="text-xl font-semibold text-gray-800">
                                {product.sku}
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Estado</p>
                            <p
                                className={`text-xl font-semibold ${product.active ? "text-green-600" : "text-red-600"
                                    }`}
                            >
                                {product.active ? "Activo" : "Inactivo"}
                            </p>
                        </div>
                    </div>

                    {/* Botón solo visible si el rol es ADMIN */}
                    {session?.user?.role === "ADMIN" && (
                        <Link
                            href={`/products/${product.id}/edit`}
                            className="inline-block mt-6 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                        >
                            Editar producto
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}