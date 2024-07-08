import { MessageType } from '../enums/message_type.enum';

export class MessageModel {
    id: string;
    replyTo: string | null; // If this message is not a reply : Field is null.
    relationshipId: string;
    authorId: string;
    type: MessageType;
    text: string;
    sentAt: Date;
    sentTo: string | null; // If this message is in a room : Field is null
    deliveredTo: string | null; // If this message is in a room : Field is null
    seenBy: string[];

    constructor(
        id: string,
        replyTo: string | null,
        relationshipId: string,
        authorId: string,
        type: MessageType,
        text: string,
        sentAt: Date,
        sentTo: string | null,
        deliveredTo: string | null,
        seenBy: string[]
    ) {
        this.id = id;
        this.replyTo = replyTo;
        this.relationshipId = relationshipId;
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