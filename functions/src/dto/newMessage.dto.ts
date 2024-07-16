import {MessagePlace} from "../enums/messagePlace.enum";
import {MessageType} from "../enums/messageType.enum";

export class NewMessageDto {
    replyTo: string;
    groupId: string;
    authorId: string;
    text: string;
    mediaUrl: string;
    place: MessagePlace;
    type: MessageType

    constructor(replyTo: string, groupId: string, authorId: string, text: string, mediaUrl: string, place: MessagePlace, type: MessageType) {
        this.replyTo = replyTo;
        this.groupId = groupId;
        this.authorId = authorId;
        this.text = text;
        this.mediaUrl = mediaUrl;
        this.place = place;
        this.type = type;
    }

}