import {RoomInterface} from "./room.interface";
import {UserInRoomStatus} from "../../enums/userInRoomStatus.enum";

export class RoomModel implements RoomInterface {
    id: string;
    users: { [key: string]: {status: UserInRoomStatus; updatedAt: Date;} };
    name: string;
    photo: string;
    lastChatPreview: string;
    lastChatUpdate: Date;

    constructor(
        id: string,
        users: { [key: string]: {status: UserInRoomStatus; updatedAt: Date} },
        name: string,
        photo: string,
        lastChatPreview: string,
        lastChatUpdate: Date
    ) {
        this.id = id;
        this.users = users;
        this.name= name;
        this.photo = photo;
        this.lastChatPreview = lastChatPreview;
        this.lastChatUpdate = lastChatUpdate;
    }
}