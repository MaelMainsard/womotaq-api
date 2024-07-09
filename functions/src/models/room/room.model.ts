import {RoomInterface} from "./room.interface";
import {UserInRoomStatus} from "../../enums/userInRoomStatus.enum";
import {RoomEntity} from "./room.entity";

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

    toEntity(): RoomEntity {
        return new RoomEntity({
            id: this.id,
            users: this.users,
            name: this.name,
            photo: this.photo,
            lastChatPreview: this.lastChatPreview,
            lastChatUpdate: this.lastChatUpdate
        });
    }

    static fromEntity(entity: RoomEntity): RoomModel {
        return new RoomModel({
            id: entity.id,
            users: entity.users,
            name: entity.name,
            photo: entity.photo,
            lastChatPreview: entity.lastChatPreview,
            lastChatUpdate: entity.lastChatUpdate
        });
    }
}