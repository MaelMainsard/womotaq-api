import {RelationshipRepository} from "../../../repository/relationship.repository";
import {RoomRepository} from "../../../repository/room.repository";
import {MessagePlace} from "../../../enums/messagePlace.enum";

export const validGroupId = async (value:any, { req }: {req: any}) => {
    const relationRepo:RelationshipRepository = new RelationshipRepository();
    const roomRepo:RoomRepository = new RoomRepository();

    const place = value.place;
    const groupId = value.groupId;

    if(place === undefined || place === null || typeof place !== "string" ||groupId === undefined || groupId === null || typeof groupId !== "string") {
        return true;
    }

    if(place == MessagePlace.RELATIONSHIP){
        if(await relationRepo.getRelationShipById(groupId) == null){
            throw new Error("Relationship id doesn't exist");
        }
    }
    else {
        if(await roomRepo.getRoomById(groupId) == null) {
            throw new Error("This room id doesn't exist");
        }
    }

    return true;
};