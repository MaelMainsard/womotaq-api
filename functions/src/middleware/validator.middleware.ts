import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import {ResponseConstant} from "../constants/response.constant";


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

    return res.status(ResponseConstant.statusCodes.badRequest).json(ResponseConstant.error("Bad request",extractedErrors));
};