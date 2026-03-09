export interface Sale {
    id: string;
    orderId: string;
    date: Date;
    amount: number;
    stripePaymentId: string;
    stripeStatus: string; // "succeeded" | "pending" | "failed"
    stripeReceiptUrl?: string;
}
