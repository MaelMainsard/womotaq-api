import { IsString, IsNotEmpty } from 'class-validator';
import {CheckGroupIdExist} from "../validators/validGroupId/checkGroupIdExist";

export class NewMessageDto {
    replyTo: string | null;

    //This field is required

    //This field must be a string
    //This field must exist in relationship table or roomId
    @IsString()
    @IsNotEmpty()
    @CheckGroupIdExist()
    groupId: string;

    //This field is required
    //This field must be a string
    //This field must exist in the user table
    @IsString()
    @IsNotEmpty()
    authorId: string;

    //This field is required
    //This field must be a string
    @IsString()
    @IsNotEmpty()
    text: string;

    constructor(replyTo: string | null, groupId: string, authorId: string, text: string) {
        this.replyTo = replyTo;
        this.groupId = groupId;
        this.authorId = authorId;
        this.text = text;
    }
}