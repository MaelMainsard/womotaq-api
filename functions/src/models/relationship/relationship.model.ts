import {RelationshipInterface} from "./relationship.interface";
import {RelationshipEntity} from "./relationship.entity";
import {UserInRelationshipStatus} from "../../enums/userInRelationshipStatus.enum";

export class RelationshipModel implements RelationshipInterface{
    users: { [key: string]: UserInRelationshipStatus };
    lastUserStatusUpdate: Date;
    lastChatUpdate: Date;

    constructor({users,lastUserStatusUpdate,lastChatUpdate}: RelationshipInterface){
        this.users = users;
        this.lastUserStatusUpdate = lastUserStatusUpdate;
        this.lastChatUpdate = lastChatUpdate;
    }

    toEntity(): RelationshipEntity {
        return new RelationshipEntity({
            users: this.users,
            lastUserStatusUpdate: this.lastUserStatusUpdate,
            lastChatUpdate: this.lastChatUpdate
        });
    }

    static fromEntity(entity: RelationshipEntity): RelationshipModel {
        return new RelationshipModel({
            users: entity.users,
            lastUserStatusUpdate: entity.lastUserStatusUpdate,
            lastChatUpdate: entity.lastChatUpdate
        });
    }
}