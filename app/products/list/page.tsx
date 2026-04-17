import ProductListView from "@/modules/products/presentation/views/ProductListView";
import { prisma } from "@/lib/prisma";

export default async function ProductsListPage() {
    // Traer productos directamente desde la base de datos
    const products = await prisma.product.findMany();

    const safeProducts = products.map(p => ({
        ...p,
        price: p.price.toNumber(),          // Decimal → number
        description: p.description ?? "",   // null → string
    }));


    // Pasar productos a la vista
    return <ProductListView initialProducts={safeProducts} />;
}