import { User } from "@evihub/db";

export function sanitizeUser(user: User): Omit<User, 'password' | 'refreshToken'> {
    const { password, refreshToken, ...safeUser } = user;
    return safeUser;
}