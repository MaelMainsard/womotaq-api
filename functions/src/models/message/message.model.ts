import { MessageType } from '../../enums/messageType.enum';
import {MessagePlace} from "../../enums/messagePlace.enum";
import {MessageStatus} from "../../enums/messageStatus.enum";
import {NewMessageDto} from "../../dto/newMessage.dto";
import { firestore } from "firebase-admin";

interface UserStatus {
    status: MessageStatus;
    date: Date;
}

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
    userStatus: Record<string, UserStatus>

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
        userStatus: Record<string, UserStatus>
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
        this.userStatus = userStatus;
    }

    static fromDocument(docId: string, groupId: string, doc: Record<string, any>): MessageModel {
        const userStatus: Record<string, UserStatus> = {};
        if (doc['userStatus']) {
            for (const [key, value] of Object.entries(doc['userStatus'])) {
                if (typeof value === 'object' && value !== null && 'status' in value && 'date' in value) {
                    userStatus[key] = {
                        status: value.status as MessageStatus,
                        date: (value.date as firestore.Timestamp).toDate()
                    };
                }
            }
        }
        return new MessageModel(
            docId,
            doc['replyTo'] !== undefined ? (doc['replyTo'] as string) : null,
            groupId,
            doc['authorId'] as string,
            doc['type'] as MessageType,
            doc['place'] as MessagePlace,
            doc['text'] as string,
            doc['mediaUrl'] !== undefined ? (doc['mediaUrl'] as string) : null,
            (doc['sentAt'] as firestore.Timestamp).toDate(),
            userStatus
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
            'userStatus': this.userStatus
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
            {},
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
        userStatus: ${this.userStatus}
      }`;
    }


}