"use client";
import { useState } from "react";

export function SignUpForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Error en el registro");
            } else {
                // limpiar campos si se registró correctamente
                setName("");
                setEmail("");
                setPassword("");
            }
        } catch {
            setError("Error inesperado");
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center text-green-600 mb-6">
                    Registrar Cliente
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Nombre */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Nombre
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Ingresa tu nombre"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                    </div>

                    {/* Correo electrónico */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Correo electrónico
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Ingresa tu correo"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                    </div>

                    {/* Contraseña */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Contraseña
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Ingresa tu contraseña"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                    </div>

                    {/* Botón */}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md 
                       hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        Registrar
                    </button>
                </form>

                {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
            </div>
        </div>

    );
}