import ProductListView from "@/modules/products/presentation/views/ProductListView";
import prisma from "@/lib/prisma";

export default async function ProductsListPage() {
    // Traer productos directamente desde la base de datos
    const products = await prisma.product.findMany({
        orderBy: { name: "asc" },
    });

    // Pasar productos a la vista
    return <ProductListView initialProducts={products} />;
}