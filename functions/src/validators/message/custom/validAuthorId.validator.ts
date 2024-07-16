import {UserRepository} from "../../../repository/user.repository";

export const validAuthorId = async (authorId: string) => {
    if(typeof authorId !== "string" || authorId === "" || authorId === null) {
        return true;
    }
    const userRepo: UserRepository = new UserRepository();
    return await userRepo.getUserById(authorId) != null;
};