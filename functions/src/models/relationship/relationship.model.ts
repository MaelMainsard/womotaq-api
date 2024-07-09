import {RelationshipInterface} from "./relationship.interface";
import {UserInRelationshipStatus} from "../../enums/userInRelationshipStatus.enum";
import {RelationshipEntity} from "./relationship.entity";

export class RelationshipModel implements RelationshipInterface{
    id: string;
    users: { [key: string]: UserInRelationshipStatus };
    lastUserStatusUpdate: Date;
    lastChatUpdate: Date;

    constructor({id,users,lastUserStatusUpdate,lastChatUpdate}: RelationshipInterface){
        this.id = id;
        this.users = users;
        this.lastUserStatusUpdate = lastUserStatusUpdate;
        this.lastChatUpdate = lastChatUpdate;
    }

    toEntity(): RelationshipEntity {
        return new RelationshipEntity({
            id: this.id,
            users: this.users,
            lastUserStatusUpdate: this.lastUserStatusUpdate,
            lastChatUpdate: this.lastChatUpdate
        });
    }

    static fromEntity(entity: RelationshipEntity): RelationshipModel {
        return new RelationshipModel({
            id: entity.id,
            users: entity.users,
            lastUserStatusUpdate: entity.lastUserStatusUpdate,
            lastChatUpdate: entity.lastChatUpdate
        });
    }
}