import {UserInRelationshipStatus} from "../../enums/userInRelationshipStatus.enum";

export interface RelationshipInterface {
    users: { [key: string]: UserInRelationshipStatus };
    lastUserStatusUpdate: Date;
    lastChatUpdate: Date;
}