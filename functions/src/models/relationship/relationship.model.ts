import {RelationshipInterface} from "./relationship.interface";
import {UserInRelationshipStatus} from "../../enums/userInRelationshipStatus.enum";

export class RelationshipModel implements RelationshipInterface{
    id: string;
    users: { [key: string]: UserInRelationshipStatus };
    lastUserStatusUpdate: Date;
    lastChatUpdate: Date;

    constructor(id: string, users: { [key: string]: UserInRelationshipStatus },lastUserStatusUpdate: Date, lastChatUpdate: Date) {
        this.id = id;
        this.users = users;
        this.lastUserStatusUpdate = lastUserStatusUpdate;
        this.lastChatUpdate = lastChatUpdate;
    }
}