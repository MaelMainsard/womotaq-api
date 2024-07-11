import {RoomInterface} from "./room.interface";
import {UserInRoomStatus} from "../../enums/userInRoomStatus.enum";

export class RoomModel implements RoomInterface {
    id: string;
    users: { [key: string]: {status: UserInRoomStatus; updatedAt: Date;} };
    name: string;
    photo: string;
    lastChatPreview: string;
    lastChatUpdate: Date;

    constructor({id, users,name,photo, lastChatPreview, lastChatUpdate}:RoomInterface) {
        this.id = id;
        this.users = users;
        this.name= name;
        this.photo = photo;
        this.lastChatPreview = lastChatPreview;
        this.lastChatUpdate = lastChatUpdate;
    }

    toDocument(): Record<string, any> {
        return {
            'id': this.id,
            'users': this.users,
            'name': this.name,
            'photo': this.photo,
            'lastChatPreview': this.lastChatPreview,
            'lastChatUpdate': this.lastChatUpdate,
        };
    }

    static fromDocument(doc: Record<string, any>): RoomModel {
        return new RoomModel({
            id: doc['id'] as string,
            users: doc['users'] as { [key: string]: {status: UserInRoomStatus; updatedAt: Date;} },
            name: doc['name'] as string,
            photo: doc['photo'] as string,
            lastChatPreview: doc['lastChatPreview'] as string,
            lastChatUpdate: doc['lastChatUpdate'] as Date,
        });
    }

    toString(): string {
        return `RoomEntity: {
        id: ${this.id},
        users: ${this.users},
        name: ${this.name},
        photo: ${this.photo},
        lastChatPreview: ${this.lastChatPreview},
        lastChatUpdate: ${this.lastChatUpdate},
      }`;
    }
}