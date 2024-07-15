import {MessagePlace} from "../enums/messagePlace.enum";
import {MessageType} from "../enums/messageType.enum";

export class NewMessageDto {
    replyTo: string | null;
    groupId: string;
    authorId: string;
    text: string;
    place: MessagePlace;
    type: MessageType

    constructor(replyTo: string | null, groupId: string, authorId: string, text: string, place: MessagePlace, type: MessageType) {
        this.replyTo = replyTo === undefined ? null : replyTo;
        this.groupId = groupId;
        this.authorId = authorId;
        this.text = text;
        this.place = place;
        this.type = type;
    }

}