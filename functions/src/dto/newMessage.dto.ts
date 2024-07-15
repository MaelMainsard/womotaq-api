import {MessagePlace} from "../enums/messagePlace.enum";
import {MessageType} from "../enums/messageType.enum";

export class NewMessageDto {
    replyTo: string | null;
    groupId: string;
    authorId: string;
    text: string;
    mediaUrl: string | null;
    place: MessagePlace;
    type: MessageType

    constructor(replyTo: string | null, groupId: string, authorId: string, text: string, mediaUrl: string | null, place: MessagePlace, type: MessageType) {
        this.replyTo = replyTo === undefined ? null : replyTo;
        this.groupId = groupId;
        this.authorId = authorId;
        this.text = text;
        this.mediaUrl = mediaUrl === undefined ? null : mediaUrl;
        this.place = place;
        this.type = type;
    }

}