import { User } from "../domain/entities/user.entity";
import { UserRepository } from "../domain/repositories/userRepository";


export class UpdateUserUseCase {
    constructor(private userRepo: UserRepository) { }

    async execute(
        id: string,
        data: Partial<Omit<User, "id" | "createdAt" | "updatedAt">>
    ): Promise<User> {
        // Validaciones de negocio
        if (!id) {
            throw new Error("El ID del usuario es requerido");
        }

        if (data.email && !data.email.includes("@")) {
            throw new Error("El correo electrónico no es válido");
        }

        // Delegar la actualización al repositorio
        const updatedUser = await this.userRepo.update(id, data);

        if (!updatedUser) {
            throw new Error("No se pudo actualizar el usuario");
        }

        return updatedUser;
    }
}