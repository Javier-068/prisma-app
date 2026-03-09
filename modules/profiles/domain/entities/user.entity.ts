export interface User {
    id: string;
    email: string;
    password?: string | null;
    name?: string | null;
    emailVerified?: Date | null;
    role: "USER" | "ADMIN";
    createdAt: Date;
    updatedAt: Date;
}