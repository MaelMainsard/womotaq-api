import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';


export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors: string[] = [];

    errors.array().map(err => {
        if(err.type === "field" && err.path !== ""){
            extractedErrors.push(`${err.path} : ${err.msg}`);
        }
        else {
            extractedErrors.push(err.msg);
        }
    });

    return res.status(400).json({
        errors: extractedErrors,
    });
};