"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Product {
    id: string;
    sku: string;
    name: string;
    description?: string;
    image?: string;
    price?: number;
    stock?: number;
    active?: boolean;
}

interface ProductCardProps {
    product: Product;
    onAdd?: (quantity: number) => void; // 👈 ahora recibe cantidad
}

export default function ProductCard({ product, onAdd }: ProductCardProps) {
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(1); // 👈 cantidad seleccionada
    const router = useRouter();

    async function handleDelete() {
        if (!confirm(`¿Seguro que quieres eliminar el producto "${product.name}"?`)) return;
        try {
            setLoading(true);
            const res = await fetch(`/api/products/${product.id}`, { method: "DELETE" });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || `Error ${res.status}`);
            alert(data.message);
            router.refresh();
        } catch (err) {
            console.error("Error eliminando producto:", err);
            alert("No se pudo eliminar el producto");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            {product.image ? (
                <img
                    src={product.image}
                    alt={product.name || "Sin nombre"}
                    className="h-48 w-full object-cover"
                />
            ) : (
                <div className="h-48 w-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold">
                    Sin imagen
                </div>
            )}

            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                    <Link href={`/products/${product.id}`} className="hover:underline">
                        {product.name}
                    </Link>
                </h3>

                <p className="text-gray-700 mt-1">{product.description || "Sin descripción"}</p>

                <div className="mt-3 space-y-1">
                    <p className="text-green-600 font-bold">
                        {product.price !== undefined ? `$${product.price} MXN` : "Precio no disponible"}
                    </p>
                    <p className="text-sm text-gray-700">
                        Stock: {product.stock !== undefined ? product.stock : "No especificado"}
                    </p>
                    <p className="text-sm text-gray-700">SKU: {product.sku || "Sin SKU"}</p>
                    <p
                        className={`text-sm font-semibold ${product.active ? "text-green-600" : "text-red-600"
                            }`}
                    >
                        {product.active ? "Activo" : "Inactivo"}
                    </p>
                </div>

                {/* Botón eliminar */}
                <button
                    onClick={handleDelete}
                    disabled={loading}
                    className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 disabled:opacity-50"
                >
                    {loading ? "Eliminando..." : "Eliminar"}
                </button>

                {/* Selector de cantidad + botón agregar */}
                {onAdd && (
                    <div className="mt-2 flex gap-2 items-center">
                        <button
                            onClick={() => onAdd(quantity)}
                            disabled={product.stock !== undefined && product.stock <= 0}
                            className={`flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 ${product.stock !== undefined && product.stock <= 0
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                                }`}
                        >
                            {product.stock !== undefined && product.stock <= 0
                                ? "Sin stock"
                                : "Agregar al carrito"}
                        </button>

                        <input
                            type="number"
                            min={1}
                            max={product.stock ?? 99}
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                            className="w-16 border rounded px-2 py-1 text-center text-gray-700"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}