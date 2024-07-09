import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import {UserRepository} from "../../repository/user.repository";


@ValidatorConstraint({ name: 'checkAuthorIdExist', async: false })
export class CheckAuthorIdExistValidator implements ValidatorConstraintInterface {

    private userRepo: UserRepository = new UserRepository();

    async validate(authorId: string, args: ValidationArguments) {
        if (authorId == null) {
            return true;
        }

        return await this.userRepo.getUserById(authorId) != null;
    }

    defaultMessage(args: ValidationArguments) {
        return 'The authorId ($value) was not found in the user table.';
    }
}