"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full bg-green-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
            {/* Logo provisional */}
            <Link href="/" className="text-xl font-bold hover:underline">
                Logo
            </Link>

            {/* Menú desplegable */}
            <div className="relative">
                <button
                    onClick={() => setOpen(!open)}
                    className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
                >
                    Menú
                </button>

                {open && (
                    <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded shadow-lg">
                        <Link
                            href="/orders/create"
                            className="block px-4 py-2 hover:bg-gray-100"
                            onClick={() => setOpen(false)}
                        >
                            🛒 Carrito
                        </Link>
                        <Link
                            href="/profile"
                            className="block px-4 py-2 hover:bg-gray-100"
                            onClick={() => setOpen(false)}
                        >
                            👤 Perfil
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}