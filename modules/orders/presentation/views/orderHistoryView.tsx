"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

interface OrderDetail {
    id: string;
    product: {
        name: string;
        price: number;
    };
    quantity: number;
    price: number;
}

interface Order {
    id: string;
    createdAt: string;
    status: string;
    total: number;
    orderdetail: OrderDetail[];
}

export default function OrdersHistoryView() {
    const { data: session, status } = useSession();
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        if (status === "loading") return;
        if (!session?.user?.email) return;

        const fetchOrders = async () => {
            const res = await fetch(`/api/orders?email=${session.user.email}`);
            const data = await res.json();
            setOrders(data);
        };

        fetchOrders();
    }, [session, status]);

    if (status === "loading") {
        return <p className="text-gray-500">Cargando historial...</p>;
    }

    if (!session) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-gray-600">Debes iniciar sesión para ver tu historial</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full px-4 py-8 bg-white">
            <h2 className="text-3xl font-bold text-green-600 mb-6">Historial de compras</h2>

            {orders.length === 0 ? (
                <p className="text-gray-500">No tienes compras registradas</p>
            ) : (
                <div className="space-y-6">
                    {orders.map((order) => (
                        <div key={order.id} className="bg-white shadow rounded p-4">
                            <p className="text-gray-700 font-semibold">
                                Fecha: {new Date(order.createdAt).toLocaleDateString()} — Estado: {order.status}
                            </p>
                            <ul className="mt-2 space-y-1">
                                {order.orderdetail.map((detail) => (
                                    <li key={detail.id} className="text-gray-600">
                                        {detail.product.name} — {detail.quantity} × ${detail.price} MXN
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-2 font-bold text-gray-800">
                                Total: ${order.total} MXN
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}