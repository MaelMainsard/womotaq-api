import { MessageType } from '../../enums/messageType.enum';
import {MessagePlace} from "../../enums/messagePlace.enum";
import {NewMessageDto} from "../../dto/newMessage.dto";
import { firestore } from "firebase-admin";

export class MessageModel {
    id: string | null;
    replyTo: string | null;
    groupId: string;
    authorId: string;
    type: MessageType;
    place: MessagePlace;
    text: string;
    mediaUrl: string | null;
    sentAt: Date;
    sentTo: string[];
    deliveredTo: string[];
    seenBy: string[];

    constructor(
        id:string | null,
        replyTo:string | null,
        groupId:string,
        authorId:string,
        type:MessageType,
        place:MessagePlace,
        text:string,
        mediaUrl: string | null,
        sentAt:Date,
        sentTo:string[],
        deliveredTo:string[],
        seenBy:string[]
    ) {
        this.id = id;
        this.replyTo = replyTo;
        this.groupId = groupId;
        this.authorId = authorId;
        this.type = type;
        this.place = place;
        this.text = text;
        this.mediaUrl = mediaUrl;
        this.sentAt = sentAt;
        this.sentTo = sentTo;
        this.deliveredTo = deliveredTo;
        this.seenBy = seenBy;
    }

    static fromDocument(docId:string, groupId:string, doc: Record<string, any>): MessageModel {
        return new MessageModel(
            docId,
            doc['replyTo'] !== undefined ? (doc['replyTo'] as string) : null,
            groupId,
            doc['authorId'] as string,
            doc['type'] as MessageType,
            doc['place'] as MessagePlace,
            doc['text'] as string,
            doc['mediaUrl'] !== undefined ? (doc['mediaUrl'] as string) : null,
            (doc['sentAt'] as firestore.Timestamp).toDate() as Date,
            doc['sentTo'] as string[],
            doc['deliveredTo'] as string[],
            doc['seenBy'] as string[]
        );
    }

    toDocument(): Record<string, any> {
        return {
            ...(this.replyTo !== null && { 'replyTo': this.replyTo }),
            'authorId': this.authorId,
            'type': this.type,
            'text': this.text,
            ...(this.mediaUrl !== null && { 'mediaUrl': this.mediaUrl }),
            'sentAt': this.sentAt,
            'sentTo': this.sentTo,
            'deliveredTo': this.deliveredTo,
            'seenBy': this.seenBy
        };
    }

    static fromNewMessageDto(dto: NewMessageDto): MessageModel{
        return new MessageModel(
            null,
            dto.replyTo === undefined ? null : dto.replyTo,
            dto.groupId,
            dto.authorId,
            dto.type,
            dto.place,
            dto.text,
            dto.mediaUrl === undefined ? null : dto.mediaUrl,
            new Date(),
            [],
            [],
            []
        );
    }

    toString(): string {
        return `MessageEntity: {
        id: ${this.id},
        replyTo: ${this.replyTo},
        groupId: ${this.groupId},
        authorId: ${this.authorId},
        type: ${this.type},
        place: ${this.place},
        text: ${this.text},
        mediaUrl: ${this.mediaUrl},
        sentAt: ${this.sentAt},
        sentTo: ${this.sentTo},
        deliveredTo: ${this.deliveredTo},
        seenBy: ${this.seenBy},
      }`;
    }


}