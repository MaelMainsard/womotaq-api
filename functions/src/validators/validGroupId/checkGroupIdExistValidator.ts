import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import {RelationshipRepository} from "../../repository/relationship.repository";

@ValidatorConstraint({ name: 'checkGroupIdExist', async: false })
export class CheckGroupIdExistValidator implements ValidatorConstraintInterface {

    private repo = new RelationshipRepository();

    async validate(groupId: string, args: ValidationArguments) {
        if (groupId == null) {
            return true;
        }

        return await this.repo.getRelationShipById(groupId) != null;
    }

    defaultMessage(args: ValidationArguments) {
        return 'The groupId ($value) was not found in the relationship and room tables.';
    }
}