import { Router, Request, Response } from 'express';
import { validate } from '../middleware/validator.middleware';
import {newMessageValidator} from "../validators/newMessage.validator";
import {MessageService} from "../service/message.service";
import {NewMessageDto} from "../dto/newMessage.dto";
import {ResponseConstant} from "../constants/response.constant";
import {MessageModel} from "../models/message/message.model";

const router = Router();
const service: MessageService = new MessageService();

router.post('/sendMessage',newMessageValidator(), validate, async (req: Request, res: Response) => {
    const messageDto: NewMessageDto = req.body;
    try{
        const response: MessageModel = await service.createMessage(messageDto);
        res.status(ResponseConstant.statusCodes.created).json(ResponseConstant.success("Message added successfully", response));
    }
    catch (err) {
        res.status(ResponseConstant.statusCodes.internalServerError).json(err);
    }
});

export default router;