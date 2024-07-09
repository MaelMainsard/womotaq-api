import {UserInRoomStatus} from "../../enums/userInRoomStatus.enum";

export interface RoomInterface {
    id: string;
    users: { [key: string]: {status: UserInRoomStatus; updatedAt: Date;} };
    name: string;
    photo: string;
    lastChatPreview: string;
    lastChatUpdate: Date;
}