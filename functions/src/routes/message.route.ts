import { Router, Request, Response } from 'express';
import { validate } from '../middleware/validator.middleware';
import {newMessageValidator} from "../validators/newMessage.validator";
import {MessageService} from "../service/message.service";

const router = Router();
const service: MessageService = new MessageService();

router.post('/sendMessage',newMessageValidator(), validate,(req: Request, res: Response) => {


    service.createMessage(req).then(r =>     res.status(200).send('OK'));

});

export default router;