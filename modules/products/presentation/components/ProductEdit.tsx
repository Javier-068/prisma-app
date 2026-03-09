"use client";
import { useEffect, useState } from "react";

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

export default function ProductEdit({ id }: { id: string }) {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchProduct() {
            const res = await fetch(`/api/products/${id}`);
            const data = await res.json();
            setProduct(data);
        }
        fetchProduct();
    }, [id]);

    async function handleUpdate(e: React.FormEvent) {
        e.preventDefault();
        if (!product) return;

        setLoading(true);
        try {
            const res = await fetch(`/api/products/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(product),
            });

            if (!res.ok) throw new Error(`Error ${res.status}`);
            const updated = await res.json();
            alert("Producto actualizado correctamente");
            setProduct(updated);
        } catch (err) {
            console.error("Error actualizando producto:", err);
            alert("No se pudo actualizar el producto");
        } finally {
            setLoading(false);
        }
    }

    if (!product) return <p>Cargando producto...</p>;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl p-8">
                <h2 className="uppercase tracking-wide text-lg font-bold text-indigo-600 mb-6">
                    Editar Producto
                </h2>

                <form onSubmit={handleUpdate} className="space-y-4">
                    <input
                        type="text"
                        value={product.name}
                        onChange={(e) => setProduct({ ...product, name: e.target.value })}
                        className="w-full border p-2 rounded text-black placeholder-gray-500"
                        placeholder="Nombre"
                    />
                    <input
                        type="text"
                        value={product.sku}
                        onChange={(e) => setProduct({ ...product, sku: e.target.value })}
                        className="w-full border p-2 rounded text-black placeholder-gray-500"
                        placeholder="SKU"
                    />
                    <textarea
                        value={product.description || ""}
                        onChange={(e) => setProduct({ ...product, description: e.target.value })}
                        className="w-full border p-2 rounded text-black placeholder-gray-500"
                        placeholder="Descripción"
                    />
                    <input
                        type="text"
                        value={product.image || ""}
                        onChange={(e) => setProduct({ ...product, image: e.target.value })}
                        className="w-full border p-2 rounded text-black placeholder-gray-500"
                        placeholder="URL de imagen"
                    />
                    <input
                        type="number"
                        value={product.price}
                        onChange={(e) => setProduct({ ...product, price: Number(e.target.value) })}
                        className="w-full border p-2 rounded text-black placeholder-gray-500"
                        placeholder="Precio"
                    />
                    <input
                        type="number"
                        value={product.stock}
                        onChange={(e) => setProduct({ ...product, stock: Number(e.target.value) })}
                        className="w-full border p-2 rounded text-black placeholder-gray-500"
                        placeholder="Stock"
                    />
                    <label className="flex items-center space-x-2 text-black">
                        <input
                            type="checkbox"
                            checked={product.active}
                            onChange={(e) => setProduct({ ...product, active: e.target.checked })}
                        />
                        <span>Activo</span>
                    </label>

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                    >
                        {loading ? "Actualizando..." : "Actualizar Producto"}
                    </button>
                </form>
            </div>
        </div>
    );
}