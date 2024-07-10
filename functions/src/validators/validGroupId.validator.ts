import {RelationshipRepository} from "../repository/relationship.repository";
import {RoomRepository} from "../repository/room.repository";
import {MessagePlace} from "../enums/messagePlace.enum";

export const validGroupId = async (body: any) => {
    const relationRepo:RelationshipRepository = new RelationshipRepository();
    const roomRepo:RoomRepository = new RoomRepository();

    if(body.place == MessagePlace.RELATIONSHIP){
        if(await relationRepo.getRelationShipById(body.groupId) == null){
            throw new Error("Relationship id doesn't exist");
        }
    }
    else {
        if(await roomRepo.getRoomById(body.groupId) == null) {
            throw new Error("This room id doesn't exist");
        }
    }

    return true;
};