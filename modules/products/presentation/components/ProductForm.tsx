"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductForm() {
    const [form, setForm] = useState({
        sku: "",
        name: "",
        description: "",
        image: "",
        price: 0,
        stock: 0,
        active: true,
    });

    const router = useRouter();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        try {
            const res = await fetch("/api/products/save", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || `Error ${res.status}`);
            }

            alert("Producto guardado correctamente");
            router.push("/products/list");
        } catch (err) {
            console.error("Error guardando producto:", err);
            alert("No se pudo guardar el producto");
        }
    }

    const isFormValid =
        form.sku.trim() !== "" &&
        form.name.trim() !== "" &&
        form.description.trim() !== "" &&
        form.image.trim() !== "" &&
        form.price > 0 &&
        form.stock > 0;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-2xl bg-white rounded-xl shadow-xl p-8 space-y-6"
            >
                <h2 className="text-3xl font-bold text-green-600 text-center mb-6">
                    Registrar Producto
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input
                            type="text"
                            placeholder="Nombre"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                                focus:border-green-600 focus:ring-green-600 px-3 py-2 text-gray-900"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">SKU</label>
                        <input
                            type="text"
                            placeholder="SKU"
                            value={form.sku}
                            onChange={(e) => setForm({ ...form, sku: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                                focus:border-green-600 focus:ring-green-600 px-3 py-2 text-gray-900"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Precio</label>
                        <input
                            type="number"
                            min={0}
                            placeholder="Precio"
                            value={form.price}
                            onChange={(e) =>
                                setForm({ ...form, price: Math.max(0, +e.target.value) })
                            }
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                                focus:border-green-600 focus:ring-green-600 px-3 py-2 text-gray-900"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Stock</label>
                        <input
                            type="number"
                            min={0}
                            placeholder="Cantidad en stock"
                            value={form.stock}
                            onChange={(e) =>
                                setForm({ ...form, stock: Math.max(0, +e.target.value) })
                            }
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                                focus:border-green-600 focus:ring-green-600 px-3 py-2 text-gray-900"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Descripción</label>
                    <textarea
                        placeholder="Descripción del producto"
                        value={form.description}
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                            focus:border-green-600 focus:ring-green-600 px-3 py-2 text-gray-900"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Imagen del producto
                    </label>

                    {/* Botón visible */}
                    <label
                        htmlFor="fileInput"
                        className="inline-block bg-green-600 text-white px-4 py-2 rounded-md shadow 
                   cursor-pointer hover:bg-green-700 transition-colors"
                    >
                        Seleccionar archivo
                    </label>

                    {/* Input oculto */}
                    <input
                        id="fileInput"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (!file) return;

                            const formData = new FormData();
                            formData.append("file", file);

                            const res = await fetch("/api/upload", {
                                method: "POST",
                                body: formData,
                            });

                            const data = await res.json();
                            setForm({ ...form, image: data.url });
                        }}
                    />

                    {/* Nombre del archivo seleccionado */}
                    {form.image && (
                        <p className="mt-2 text-sm text-green-700 font-medium">
                            Imagen cargada correctamente
                        </p>
                    )}
                </div>


                <div className="flex items-center space-x-3">
                    <input
                        type="checkbox"
                        checked={form.active}
                        onChange={(e) => setForm({ ...form, active: e.target.checked })}
                        className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-600"
                    />
                    <label className="text-sm font-medium text-gray-700">Activo</label>
                </div>

                <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`w-full font-semibold py-3 px-4 rounded-md shadow transition-colors
                            ${isFormValid
                            ? "bg-green-600 text-white hover:bg-green-700"
                            : "bg-gray-400 text-gray-200 cursor-not-allowed"
                        }`}
                >
                    Guardar Producto
                </button>

            </form>
        </div>
    );
}
