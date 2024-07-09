import { MessageType } from '../../enums/messageType.enum';
import {MessageInterface} from "./message.interface";
import {MessageEntity} from "./message.entity";

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

    constructor({id, replyTo, groupId, authorId, type, text, sentAt, sentTo, deliveredTo, seenBy}: MessageInterface) {
        this.id = id;
        this.replyTo = replyTo;
        this.groupId = groupId;
        this.authorId = authorId;
        this.type = type;
        this.text = text;
        this.sentAt = sentAt;
        this.sentTo = sentTo;
        this.deliveredTo = deliveredTo;
        this.seenBy = seenBy;
    }

    toEntity(): MessageEntity {
        return new MessageEntity({
            id: this.id,
            replyTo: this.replyTo,
            groupId: this.groupId,
            authorId: this.authorId,
            type: this.type,
            text: this.text,
            sentAt: this.sentAt,
            sentTo: this.sentTo,
            deliveredTo: this.deliveredTo,
            seenBy: this.seenBy
        });
    }

    static fromEntity(entity: MessageEntity): MessageModel {
        return new MessageModel({
            id: entity.id,
            replyTo: entity.replyTo,
            groupId: entity.groupId,
            authorId: entity.authorId,
            type: entity.type,
            text: entity.text,
            sentAt: entity.sentAt,
            sentTo: entity.sentTo,
            deliveredTo: entity.deliveredTo,
            seenBy: entity.seenBy
        });
    }

}