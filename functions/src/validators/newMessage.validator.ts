import { body } from 'express-validator';
import { MessagePlace} from "../enums/messagePlace.enum";
// import { validGroupId } from "./validGroupId.validator";
// import {validAuthorId} from "./validAuthorId.validator";

export const newMessageValidator = () => {
    return [
        body('replyTo')
            .optional()
            .isString().withMessage('Field must be a string'),
        body('groupId')
            .notEmpty().withMessage('Field is required').bail()
            .isString().withMessage('Field must be a string'),
        body('authorId')
            .notEmpty().withMessage('Field is required').bail()
            .isString().withMessage('Field must be a string').bail(),
        //    .custom(validAuthorId).withMessage("The author doesn't exist ( authorId was not found )"),
        body('text')
            .notEmpty().withMessage('Field is required').bail()
            .isString().withMessage('Field must be a string'),
        body('place')
            .notEmpty().withMessage('Field is required').bail()
            .isString().withMessage('Field must be a string').bail()
            .isIn(Object.values(MessagePlace)).withMessage('Field is not in the list'),
        //body().custom(validGroupId)
    ];
};