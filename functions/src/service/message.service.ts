import {MessageModel} from "../models/message/message.model";
import { MessageRepository } from "../repository/message.repository";
import {NewMessageDto} from "../dto/newMessage.dto";

export class MessageService {

    async createMessage(dto: NewMessageDto): Promise<MessageModel> {
        const messageRepository: MessageRepository = new MessageRepository(dto.place, dto.groupId);
        return await messageRepository.addNewMessage(MessageModel.fromNewMessageDto(dto));
    }

}