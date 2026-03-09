import { UserRepository } from "../domain/repositories/userRepository";


export class LoginUser {
    constructor(private userRepo: UserRepository) { }

    async execute(email: string, password: string) {
        const user = await this.userRepo.findByEmail(email);
        if (!user) throw new Error("Usuario no encontrado");

        if (user.password !== password) throw new Error("Contraseña incorrecta");

        return user;
    }
}