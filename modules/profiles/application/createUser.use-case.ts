import { UserRepository } from "../domain/repositories/userRepository";


export class RegisterUser {
    constructor(private userRepo: UserRepository) { }

    async execute(name: string, email: string, password: string) {
        return this.userRepo.create({
            name,
            email,
            password,
            role: "USER",
            emailVerified: null,
        });
    }
}