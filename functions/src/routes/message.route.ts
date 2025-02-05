import { Router, Request, Response } from 'express';
import { validate } from '../middleware/validator.middleware';
import {newMessageValidator} from "../validators/message/newMessage.validator";
import {MessageService} from "../service/message.service";
import {NewMessageDto} from "../dto/newMessage.dto";
import {ResponseConstant} from "../constants/response.constant";
import {MessageModel} from "../models/message/message.model";

const router: Router = Router();
const service: MessageService = new MessageService();

router.post('/sendMessage',newMessageValidator(), validate, async (req: Request, res: Response) => {
    try {
        const messageDto: NewMessageDto = req.body;
        console.log(messageDto);
        const response: MessageModel = await service.createMessage(messageDto);
        res.status(ResponseConstant.statusCodes.created).json(ResponseConstant.success("Message added successfully", response));
    } catch (error){
        res.status(ResponseConstant.statusCodes.internalServerError).json(ResponseConstant.internalServerError((error as Error).message));
    }
});

export default router;