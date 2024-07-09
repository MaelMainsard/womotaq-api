import { MessageType } from '../../enums/messageType.enum';
import {MessageInterface} from "./message.interface";

export class MessageModel implements MessageInterface {
    id: string;
    replyTo: string | null; // If this message is not a reply : Field is null.
    groupId: string;
    authorId: string;
    type: MessageType;
    text: string;
    sentAt: Date;
    sentTo: string[];
    deliveredTo: string[];
    seenBy: string[];

    constructor(
        id: string,
        replyTo: string | null,
        groupId: string,
        authorId: string,
        type: MessageType,
        text: string,
        sentAt: Date,
        sentTo: string[],
        deliveredTo: string[],
        seenBy: string[]
    ) {
        this.id = id;
        this.replyTo = replyTo;
        this.groupId = groupId;
        this.authorId = authorId;
        this.type = type;
        this.text = text;
        this.sentAt = sentAt;
        this.sentTo = sentTo;
        this.sentTo = sentTo;
        this.deliveredTo = deliveredTo;
        this.seenBy = seenBy;
    }
}