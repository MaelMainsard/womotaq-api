import {UserInRelationshipStatus} from "../../enums/userInRelationshipStatus.enum";

export interface RelationshipInterface {
    id: string;
    users: { [key: string]: UserInRelationshipStatus };
    lastUserStatusUpdate: Date;
    lastChatUpdate: Date;
}