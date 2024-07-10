import { IsString, IsNotEmpty } from 'class-validator';
import {CheckGroupIdExist} from "../validators/validGroupId/checkGroupIdExist";
import {CheckAuthorIdExist} from "../validators/validAuthorId/checkAuthorIdExist";

export class NewMessageDto {
    replyTo: string | null;

    @IsString()
    @IsNotEmpty()
    @CheckGroupIdExist()
    groupId: string;

    @IsString()
    @IsNotEmpty()
    @CheckAuthorIdExist()
    authorId: string;

    @IsString()
    @IsNotEmpty()
    text: string;

    constructor(replyTo: string | null, groupId: string, authorId: string, text: string) {
        this.replyTo = replyTo;
        this.groupId = groupId;
        this.authorId = authorId;
        this.text = text;
    }

    static toObject(body: any) {
        return new NewMessageDto(
            replyTo: body.replyTo,
            groupId: body.groupId,
            authorId: body.authorId,

        )
    }
}