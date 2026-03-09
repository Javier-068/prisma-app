import { User } from "../entities/user.entity";


export interface UserRepository {
    findByEmail(email: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
    create(data: Omit<User, "id" | "createdAt" | "updatedAt">): Promise<User>;
    update(
        id: string,
        data: Partial<Omit<User, "id" | "createdAt" | "updatedAt">>
    ): Promise<User | null>;
}

