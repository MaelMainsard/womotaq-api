import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import {NextFunction} from "express";

export const validateBody = (dtoClass: any) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const dtoInstance = plainToInstance(dtoClass, req.body);
        const errors = await validate(dtoInstance as object);

        if (errors.length > 0) {

            // @ts-ignore
            return res.status(400).json({
                errors: errors.map((error) => ({
                    property: error.property,
                    constraints: error.constraints,
                })),
            });
        }

        next();
    };
};