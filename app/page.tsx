// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-white">
      <main className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-14">
        <div className="grid w-full items-center gap-10 md:grid-cols-2">
          {/* Texto */}
          <section className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-900">
              🌿 BioFresh • Productos naturales
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
              Compra saludable, simple y bonito.
            </h1>

            <p className="max-w-xl text-lg leading-8 text-zinc-600">
              Encuentra productos frescos, con una experiencia limpia y rápida.
              Explora el catálogo y entra al detalle de cada producto.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products/list"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-green-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700"
              >
                Ver catálogo
              </Link>

              <Link
                href="/products"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50"
              >
                Ver productos
              </Link>
            </div>


          </section>

          {/* Imagen */}
          <section className="flex items-center justify-center">
            <div className="relative w-full max-w-md rounded-3xl border border-zinc-200 bg-white p-6 shadow-lg">
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-green-200/60 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-emerald-200/60 blur-2xl" />

              <div className="flex items-center justify-center">
                <Image
                  src="/ninopapaya.jpg"
                  alt="BioFresh"
                  width={520}
                  height={520}
                  priority
                  className="h-auto w-full rounded-2xl object-contain"
                />
              </div>

              <p className="mt-4 text-center text-sm text-zinc-600">
                Bienvenido a BioFresh 🌱
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
