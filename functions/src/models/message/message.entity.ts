import {MessageInterface} from "./message.interface";
import {MessageType} from "../../enums/messageType.enum";

export class MessageEntity implements MessageInterface {
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

    constructor({id, replyTo, groupId, authorId, type, text, sentAt, sentTo, deliveredTo, seenBy}: MessageInterface) {
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

    toDocument(): Record<string, any> {
        return {
            'id': this.id,
            'replyTo': this.replyTo,
            'groupId': this.groupId,
            'authorId': this.authorId,
            'type': this.type,
            'text': this.text,
            'sentAt': this.sentAt,
            'sentTo': this.sentTo,
            'deliveredTo': this.deliveredTo,
            'seenBy': this.seenBy
        };
    }

    static fromDocument(doc: Record<string, any>): MessageEntity {
        return new MessageEntity({
            id: doc['id'] as string,
            replyTo: doc['replyTo'] as string | null,
            groupId: doc['groupId'] as string,
            authorId: doc['authorId'] as string,
            type: doc['type'] as MessageType,
            text: doc['text'] as string,
            sentAt: doc['sentAt'] as Date,
            sentTo: doc['sentTo'] as string[],
            deliveredTo: doc['deliveredTo'] as string[],
            seenBy: doc['seenBy'] as string[]
        });
    }

    toString(): string {
        return `MessageEntity: {
        id: ${this.id},
        replyTo: ${this.replyTo},
        groupId: ${this.groupId},
        authorId: ${this.authorId},
        type: ${this.type},
        text: ${this.text},
        sentAt: ${this.sentAt},
        sentTo: ${this.sentTo},
        deliveredTo: ${this.deliveredTo},
        seenBy: ${this.seenBy},
      }`;
    }
}
