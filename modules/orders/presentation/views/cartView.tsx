"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

export default function CartView() {
    const { data: session, status } = useSession();
    const [items, setItems] = useState<CartItem[]>([]);

    useEffect(() => {
        if (status === "loading") return;

        if (!session) {
            // 👇 si no hay sesión, no mostrar carrito
            setItems([]);
            return;
        }

        // 👇 si hay sesión, cargar carrito específico del usuario
        const stored = localStorage.getItem(`cart_${session.user.email}`);
        if (stored) {
            setItems(JSON.parse(stored));
        }
    }, [session, status]);

    function handleRemove(id: string) {
        const updated = items.filter((item) => item.id !== id);
        setItems(updated);
        if (session) {
            localStorage.setItem(`cart_${session.user.email}`, JSON.stringify(updated));
        }
    }

    function handleCheckout() {
        alert("Compra realizada con éxito");
        setItems([]);
        if (session) {
            localStorage.removeItem(`cart_${session.user.email}`);
        }
    }

    if (status === "loading") {
        return <p className="text-gray-500">Cargando carrito...</p>;
    }

    if (!session) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-gray-600">Debes iniciar sesión para ver tu carrito</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full px-4 py-8 bg-white">
            <h2 className="text-3xl font-bold text-green-600 mb-6">Tu Carrito</h2>

            {items.length === 0 ? (
                <p className="text-gray-500">El carrito está vacío</p>
            ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            <div className="h-48 w-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold">
                                {item.name.charAt(0).toUpperCase()}
                            </div>

                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>

                                <div className="mt-3 space-y-1">
                                    <p className="text-green-600 font-bold">${item.price} MXN</p>
                                    <p className="text-sm text-gray-700">Cantidad: {item.quantity}</p>
                                    <p className="text-sm text-gray-700">
                                        Total: ${item.price * item.quantity}
                                    </p>
                                </div>

                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                                >
                                    Quitar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {items.length > 0 && (
                <button
                    className="bg-green-600 text-white px-4 py-2 rounded mt-6"
                    onClick={handleCheckout}
                >
                    Finalizar compra
                </button>
            )}
        </div>
    );
}