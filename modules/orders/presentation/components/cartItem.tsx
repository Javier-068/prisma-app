type CartItemProps = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    onRemove: (id: string) => void;
};

export function CartItem({ id, name, price, quantity, onRemove }: CartItemProps) {
    return (
        <div className="flex justify-between items-center border-b py-2">
            <div>
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-gray-500">Cantidad: {quantity}</p>
            </div>
            <div className="flex items-center gap-4">
                <p>${(price * quantity).toFixed(2)}</p>
                <button onClick={() => onRemove(id)} className="text-red-500">Eliminar</button>
            </div>
        </div>
    );
}