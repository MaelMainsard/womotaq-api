import { Router, Request, Response } from 'express';
import { validate } from '../middleware/validator.middleware';
import {newMessageValidator} from "../validators/newMessage.validator";

const router = Router();

router.post('/sendMessage',newMessageValidator(), validate,(req: Request, res: Response) => {
    res.status(200).send('OK');
});

export default router;