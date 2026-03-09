import { PrismaClient } from "@prisma/client";
import { User } from "../domain/entities/user.entity";
import { UserRepository } from "../domain/repositories/userRepository";

const prisma = new PrismaClient();

export class UserPrismaRepository implements UserRepository {
    async create(data: Omit<User, "id" | "createdAt" | "updatedAt">): Promise<User> {
        return prisma.user.create({ data });
    }

    async findById(id: string): Promise<User | null> {
        return prisma.user.findUnique({ where: { id } });
    }

    async findByEmail(email: string): Promise<User | null> {
        return prisma.user.findUnique({ where: { email } });
    }

    async update(
        id: string,
        data: Partial<Omit<User, "id" | "createdAt" | "updatedAt">>
    ): Promise<User | null> {
        return prisma.user.update({
            where: { id },
            data,
        });
    }
}