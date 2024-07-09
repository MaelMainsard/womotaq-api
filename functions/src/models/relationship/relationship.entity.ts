import {RelationshipInterface} from "./relationship.interface";
import {UserInRelationshipStatus} from "../../enums/userInRelationshipStatus.enum";

export class RelationshipEntity implements RelationshipInterface {
    users: { [key: string]: UserInRelationshipStatus };
    lastUserStatusUpdate: Date;
    lastChatUpdate: Date;

    constructor({users,lastUserStatusUpdate,lastChatUpdate}: RelationshipInterface){
        this.users = users;
        this.lastUserStatusUpdate = lastUserStatusUpdate;
        this.lastChatUpdate = lastChatUpdate;
    }

    toDocument(): Record<string, any> {
        return {
            'users': this.users,
            'lastUserStatusUpdate': this.lastUserStatusUpdate,
            'lastChatUpdate': this.lastChatUpdate,
        };
    }

    static fromDocument(doc: Record<string, any>): RelationshipEntity {
        return new RelationshipEntity({
            users: doc['users'] as { [key: string]: UserInRelationshipStatus },
            lastUserStatusUpdate: doc['lastUserStatusUpdate'] as Date,
            lastChatUpdate: doc['lastChatUpdate'] as Date
        });
    }

    toString(): string {
        return `RelationshipEntity: {
        users: ${JSON.stringify(this.users)},
        lastUserStatusUpdate: ${this.lastUserStatusUpdate},
        lastChatUpdate: ${this.lastChatUpdate},
      }`;
    }
}