import { use } from "react";
import ProductEdit from "@/modules/products/presentation/components/ProductEdit";

export default function ProductEditPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    return <ProductEdit id={id} />;
}