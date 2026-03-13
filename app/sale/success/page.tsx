"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function SuccessPage() {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session?.user?.email) return;

    localStorage.removeItem(`cart_${session.user.email}`);
  }, [session]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Pago exitoso
        </h1>
        <p className="text-gray-700">
          Tu compra se realizó correctamente.
        </p>
      </div>
    </div>
  );
}