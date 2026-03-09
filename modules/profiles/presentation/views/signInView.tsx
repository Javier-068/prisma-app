"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function SignInView() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const res = await signIn("credentials", {
            redirect: false, // 👈 evita redirección automática
            email,
            password,
        });

        if (res?.error) {
            setError("Credenciales inválidas");
        } else {
            // 👇 si todo sale bien, redirige al perfil
            window.location.href = "/profile";
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
                    Iniciar Sesión
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
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
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Ingresa tu correo"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            required
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
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Ingresa tu contraseña"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>

                    {/* Botón */}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md 
                       hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        Ingresar
                    </button>
                </form>

                {error && <p className="mt-4 text-center text-red-600">{error}</p>}

                {/* Enlace a registro */}
                <p className="mt-4 text-center text-gray-600">
                    ¿No tienes cuenta?{" "}
                    <Link href="/signup" className="text-blue-600 underline">
                        Regístrate aquí
                    </Link>
                </p>
            </div>
        </div>
    );
}