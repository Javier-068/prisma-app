"use client";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import ProfileCard from "../components/profileCard";
import SignInView from "./signInView"; // 👈 importa tu componente

export default function ProfileView() {
    const { data: session, status } = useSession();
    const [showSignIn, setShowSignIn] = useState(false);

    if (status === "loading") {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-gray-500">Cargando perfil...</p>
            </div>
        );
    }

    // 👇 Si no hay sesión o ya se pidió mostrar SignInView
    if (!session || showSignIn) {
        return <SignInView />;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">
                    Perfil del Usuario
                </h2>

                <ProfileCard user={session.user} />

                <div className="mt-8 flex justify-end">
                    <button
                        onClick={async () => {
                            await signOut({ redirect: false }); // 👈 cierra sesión sin redirigir
                            setShowSignIn(true);                // 👈 activa el render de SignInView
                        }}
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                        Cerrar sesión
                    </button>
                </div>
            </div>
        </div>
    );
}