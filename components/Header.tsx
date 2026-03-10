"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";


export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full bg-green-500 text-white px-6 py-4 flex justify-between items-center shadow-md">
            {/* Logo provisional */}
             <Link href="/" passHref>

           <Image 
           src="/biofresh.png"   // coloca tu archivo en la carpeta /public
      alt="Logo BioFresh"
      width={60}        // ajusta tamaño
      height={60}
      className="mr-2 rounded-full"
    />
       </Link>
            {/* Menú desplegable */}
            <div className="relative">
                <button
                    onClick={() => setOpen(!open)}
                    className="bg-blue-400 px-4 py-2 rounded hover:bg-blue-400"
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