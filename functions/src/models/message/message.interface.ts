import {MessageType} from "../../enums/messageType.enum";

export interface MessageInterface {
    id: string;
    replyTo: string | null;
    groupId: string;
    authorId: string;
    type: MessageType;
    text: string;
    sentAt: Date;
    sentTo: string[];
    deliveredTo: string[];
    seenBy: string[];
}