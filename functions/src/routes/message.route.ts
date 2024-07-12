import { Router, Request, Response } from 'express';
import { validate } from '../middleware/validator.middleware';
import {newMessageValidator} from "../validators/newMessage.validator";
import {MessageService} from "../service/message.service";

const router = Router();
const service: MessageService = new MessageService();

router.post('/sendMessage',newMessageValidator(), validate, async (req: Request, res: Response) => {
    return await service.createMessage(req, res);
});

export default router;