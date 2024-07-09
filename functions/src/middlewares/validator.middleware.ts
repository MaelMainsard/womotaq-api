import { plainToInstance } from 'class-transformer';
import {validate} from 'class-validator';

export const ValidateMiddleware = (handler:any) => async (dtoClass: any, req: Request, res: Response) => {
    const dtoObject:any = plainToInstance(dtoClass, req.body);
    const errors = await validate(dtoObject);
    if (errors.length > 0) {
        // @ts-ignore
        return res.status(400).json({errors: errors.map(err => err.constraints)});
    }
};