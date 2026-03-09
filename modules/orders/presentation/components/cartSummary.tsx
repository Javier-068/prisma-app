type CartSummaryProps = {
    total: number;
    onCheckout: () => void;
};

export function CartSummary({ total, onCheckout }: CartSummaryProps) {
    return (
        <div className="mt-4 p-4 border rounded-lg bg-gray-50">
            <p className="text-lg font-bold">Total: ${total.toFixed(2)}</p>
            <button
                onClick={onCheckout}
                className="mt-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
                Pagar
            </button>
        </div>
    );
}