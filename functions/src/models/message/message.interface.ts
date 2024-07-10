import {MessageType} from "../../enums/messageType.enum";
import {MessagePlace} from "../../enums/messagePlace.enum";

export interface MessageInterface {
    id: string;
    replyTo: string | null;
    groupId: string;
    authorId: string;
    type: MessageType;
    place: MessagePlace;
    text: string;
    sentAt: Date;
    sentTo: string[];
    deliveredTo: string[];
    seenBy: string[];
}