import { Order } from "../entities/order.entity";
import { OrderDetail } from "../entities/orderDetail.entity";


export interface OrderRepository {
    
    create(order: Omit<Order, "id" | "createdAt" | "updatedAt">, details: OrderDetail[]): Promise<Order>;

    findById(id: string): Promise<Order | null>;

    updateStatus(id: string, status: Order["status"]): Promise<Order>;

    findByUser(userId: string): Promise<Order[]>;
}