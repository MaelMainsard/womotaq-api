import { body } from 'express-validator';
import { MessagePlace} from "../enums/messagePlace.enum";
import { validGroupId } from "./validGroupId.validator";
import {validAuthorId} from "./validAuthorId.validator";

export const newMessageValidator = () => {
    return [
        body('replyTo')
            .optional()
            .isString().withMessage('Field must be a string'),
        body('groupId')
            .isString().withMessage('Field must be a string')
            .notEmpty().withMessage('Field is required'),
        body('authorId')
            .isString().withMessage('Field must be a string')
            .notEmpty().withMessage('Field is required')
            .custom(validAuthorId).withMessage("The author doesn't exist ( authorId was not found )"),
        body('text')
            .isString().withMessage('Field must be a string')
            .notEmpty().withMessage('Field is required'),
        body('place')
            .isString().withMessage('Field must be a string')
            .notEmpty().withMessage('Field is required')
            .isIn(Object.values(MessagePlace)).withMessage('Field is not in the list'),
        body()
            .custom(validGroupId)
    ];
};