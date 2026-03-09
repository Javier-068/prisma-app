"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import ProductCard from "../components/ProductCard";

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

export default function ProductListView({ initialProducts }: { initialProducts: Product[] }) {
    const { data: session, status } = useSession();
    const [products, setProducts] = useState<Product[]>(initialProducts);

    function handleAdd(product: Product, quantity: number) {
        if (!session) {
            alert("Debes iniciar sesión para agregar productos al carrito");
            return;
        }

        const key = `cart_${session.user.email}`; // 👈 carrito único por usuario
        const stored = localStorage.getItem(key);
        const cart = stored ? JSON.parse(stored) : [];

        const existing = cart.find((item: any) => item.id === product.id);
        let updated;
        if (existing) {
            updated = cart.map((item: any) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            );
        } else {
            updated = [
                ...cart,
                { id: product.id, name: product.name, price: product.price ?? 0, quantity },
            ];
        }

        localStorage.setItem(key, JSON.stringify(updated));

        setProducts((prev) =>
            prev.map((p) =>
                p.id === product.id && p.stock !== undefined && p.stock >= quantity
                    ? { ...p, stock: p.stock - quantity }
                    : p
            )
        );

        alert(`${quantity} ${product.name} agregado(s) al carrito`);
    }

    if (status === "loading") {
        return <p className="text-gray-500">Cargando productos...</p>;
    }

    return (
        <div className="min-h-screen w-full px-4 py-8 bg-white">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-green-600">Lista de Productos</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.length === 0 ? (
                    <p className="text-gray-500">No hay productos disponibles</p>
                ) : (
                    products.map((p) => (
                        <ProductCard
                            key={p.id}
                            product={p}
                            onAdd={(quantity) => handleAdd(p, quantity)}
                        />
                    ))
                )}
            </div>
        </div>
    );
}