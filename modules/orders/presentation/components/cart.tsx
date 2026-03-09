import { CartItem } from "./cartItem";
import { CartSummary } from "./cartSummary";

interface CartProps {
    items: {
        id: string;
        name: string;
        price: number;
        quantity: number;
    }[];
    onRemove: (id: string) => void;
    onCheckout: () => void;
}

export function Cart({ items, onRemove, onCheckout }: CartProps) {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="max-w-md mx-auto p-4 shadow-lg rounded-lg bg-white">
            <h2 className="text-xl font-bold mb-4">Tu Pedido</h2>
            {items.length === 0 ? (
                <p className="text-gray-500">No hay productos en el carrito.</p>
            ) : (
                <>
                    {items.map(item => (
                        <CartItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            quantity={item.quantity}
                            onRemove={onRemove}
                        />
                    ))}
                    <CartSummary total={total} onCheckout={onCheckout} />
                </>
            )}
        </div>
    );
}