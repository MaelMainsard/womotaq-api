import {UserRepository} from "../repository/user.repository";

export const validAuthorId = async (authorId: string) => {
    const userRepo: UserRepository = new UserRepository();
    return await userRepo.getUserById(authorId) != null;
};