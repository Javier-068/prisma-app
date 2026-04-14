type CartItemProps = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image?: string; // 👈 añadimos la imagen
    onRemove: (id: string) => void;
};

export function CartItem({ id, name, price, quantity, image, onRemove }: CartItemProps) {
    return (
        <div className="flex justify-between items-center border-b py-2">
            <div className="flex items-center gap-3">
                {image && (
                    <img
                        src={image}
                        alt={name}
                        className="w-16 h-16 object-cover rounded"
                    />
                )}
                <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-sm text-gray-500">Cantidad: {quantity}</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <p>${(price * quantity).toFixed(2)}</p>
                <button onClick={() => onRemove(id)} className="text-red-500">Eliminar</button>
            </div>
        </div>
    );
}