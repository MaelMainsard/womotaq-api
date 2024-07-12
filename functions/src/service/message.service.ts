import {MessageModel} from "../models/message/message.model";
import { MessageRepository } from "../repository/message.repository";
import { ResponseConstant } from "../constants/response.constant";

export class MessageService {

    async createMessage(req: any, res: any) {
        const messageRepository: MessageRepository = new MessageRepository(req.body.place, req.body.groupId);
        const response: MessageModel | Error = await messageRepository.addNewMessage(MessageModel.fromInsertReq(req));

        if (response instanceof Error) {
            return res.status(ResponseConstant.statusCodes.internalServerError).json(ResponseConstant.error("Failed to add message", response));
        } else {
            return res.status(ResponseConstant.statusCodes.created).json(ResponseConstant.success("Message added successfully", response));
        }
    }

}