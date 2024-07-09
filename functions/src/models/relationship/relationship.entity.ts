import {RelationshipInterface} from "./relationship.interface";
import {UserInRelationshipStatus} from "../../enums/userInRelationshipStatus.enum";

export class RelationshipEntity implements RelationshipInterface {
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

    toDocument(): Record<string, any> {
        return {
            'id': this.id,
            'users': this.users,
            'lastUserStatusUpdate': this.lastUserStatusUpdate,
            'lastChatUpdate': this.lastChatUpdate,
        };
    }

    static fromDocument(doc: Record<string, any>): RelationshipEntity {
        return new RelationshipEntity({
            id: doc['id'] as string,
            users: doc['users'] as { [key: string]: UserInRelationshipStatus },
            lastUserStatusUpdate: doc['lastUserStatusUpdate'] as Date,
            lastChatUpdate: doc['lastChatUpdate'] as Date
        });
    }

    toString(): string {
        return `RelationshipEntity: {
        id: ${this.id},
        users: ${this.users},
        lastUserStatusUpdate: ${this.lastUserStatusUpdate},
        lastChatUpdate: ${this.lastChatUpdate},
      }`;
    }
}