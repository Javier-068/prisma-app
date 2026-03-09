import { OrderDetail } from "./orderDetail.entity";

export interface Order {
    id: string;
    userId: string;
    status: "PENDING" | "CONFIRMED" | "DELIVERED" | "CANCELLED";
    total: number;
    createdAt: Date;
    updatedAt: Date;
    details: OrderDetail[];
}

