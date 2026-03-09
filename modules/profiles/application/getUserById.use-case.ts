import { UserRepository } from "../domain/repositories/userRepository";


export class GetUserProfile {
    constructor(private userRepo: UserRepository) { }

    async execute(id: string) {
        const user = await this.userRepo.findById(id);
        if (!user) throw new Error("Perfil no encontrado");
        return user;
    }
}