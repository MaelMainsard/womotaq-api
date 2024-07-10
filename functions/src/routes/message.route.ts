import { Router, Request, Response } from 'express';
import { validateBody } from "../middleware/validator.middleware";
import {NewMessageDto} from "../dto/newMessage.dto";

// import { NewMessageDto} from "../dto/newMessage.dto";

// import { MessageModel } from "../models/message/message.model";

const router = Router();

// @ts-ignore
router.get('/', validateBody(NewMessageDto),(req: Request, res: Response) => {
    res.status(200).send('OK');
});

export default router;