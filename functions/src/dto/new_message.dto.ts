import { IsString } from 'class-validator';

export class NewMessageDto {
    replyTo: string | null; // If this message is not a reply : Field is null.

    @IsString()
    groupId: string;

    @IsString()
    authorId: string;

    @IsString()
    text: string;

    constructor(replyTo: string, groupId: string, authorId: string, text: string) {
        this.replyTo = replyTo;
        this.groupId = groupId;
        this.authorId = authorId;
        this.text = text;
    }
}