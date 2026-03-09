"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SignInForm() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (result?.error) {
            setError("Email o contraseña incorrectos");
        } else {
            router.push("/"); // redirige al inicio
        }
    };

    return (
        <div className="grid place-items-center">
            <h1 className="text-2xl font-bold mt-6">Iniciar Sesión</h1>

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 w-2/3 max-w-3xl mx-auto mt-10 p-6 shadow-lg rounded-lg"
            >
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-medium">
                        Correo electrónico
                    </label>
                    <input
                        id="email"
                        name="email"
                        placeholder="Ingresa tu email"
                        type="email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password" className="text-sm font-medium">
                        Contraseña
                    </label>
                    <input
                        id="password"
                        name="password"
                        placeholder="Ingresa tu contraseña"
                        type="password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="col-span-2 px-4 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-700 transition"
                >
                    Ingresar
                </button>
            </form>

            {error && <p className="text-red-600 mt-4">{error}</p>}
        </div>
    );
}