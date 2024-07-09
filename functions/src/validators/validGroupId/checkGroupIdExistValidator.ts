import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import {RelationshipRepository} from "../../repository/relationship.repository";
import {RoomRepository} from "../../repository/room.repository";

@ValidatorConstraint({ name: 'checkGroupIdExist', async: false })
export class CheckGroupIdExistValidator implements ValidatorConstraintInterface {

    private relationRepo:RelationshipRepository = new RelationshipRepository();
    private roomRepo:RoomRepository = new RoomRepository();

    async validate(groupId: string, args: ValidationArguments) {
        if (groupId == null) {
            return true;
        }

        return await this.relationRepo.getRelationShipById(groupId) != null || await this.roomRepo.getRoomById(groupId) != null;
    }

    defaultMessage(args: ValidationArguments) {
        return 'The groupId ($value) was not found in the relationship and room tables.';
    }
}