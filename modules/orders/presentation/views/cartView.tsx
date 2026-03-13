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
            setItems([]);
            return;
        }

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

 async function handleCheckout() {
    try {
        if (!session?.user?.email) {
            alert("Debes iniciar sesión");
            return;
        }

        if (items.length === 0) {
            alert("El carrito está vacío");
            return;
        }

        const response = await fetch("/api/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                items,
                customerEmail: session.user.email,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "No se pudo iniciar el pago");
        }

        window.location.href = data.url;
    } catch (error) {
        console.error("Error al ir a Stripe:", error);
        alert("No se pudo iniciar el pago");
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

    const totalGeneral = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

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
                <div className="mt-6 flex justify-between items-center">
                    <p className="text-xl font-bold text-gray-800">
                        Total general: ${totalGeneral} MXN
                    </p>
                    <button
                        className="bg-green-600 text-white px-4 py-2 rounded"
                        onClick={handleCheckout}
                    >
                        Finalizar compra
                    </button>
                </div>
            )}
        </div>
    );
}