import { MessageType } from '../../enums/messageType.enum';
import {MessagePlace} from "../../enums/messagePlace.enum";

export class MessageModel {
    id: string | null;
    replyTo: string | null; // If this message is not a reply : Field is null.
    groupId: string;
    authorId: string;
    type: MessageType;
    place: MessagePlace;
    text: string;
    sentAt: string;
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
        sentAt:string,
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
        this.sentAt = sentAt;
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
            'place': this.place,
            'text': this.text,
            'sentAt': this.sentAt,
            'sentTo': this.sentTo,
            'deliveredTo': this.deliveredTo,
            'seenBy': this.seenBy
        };
    }

    static fromDocument(doc: Record<string, any>): MessageModel {
        return new MessageModel(
            doc['id'] as string,
            doc['replyTo'] as string | null,
            doc['groupId'] as string,
            doc['authorId'] as string,
            doc['type'] as MessageType,
            doc['place'] as MessagePlace,
            doc['text'] as string,
            doc['sentAt'] as string,
            doc['sentTo'] as string[],
            doc['deliveredTo'] as string[],
            doc['seenBy'] as string[]
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
        sentAt: ${this.sentAt},
        sentTo: ${this.sentTo},
        deliveredTo: ${this.deliveredTo},
        seenBy: ${this.seenBy},
      }`;
    }

}