//Product.ts

export interface Product {
    id: string;
    sku: string;
    name: string;
    description?: string | null;  
    image?: string | null;        
    price: number;
    stock: number;
    active?: boolean;
}