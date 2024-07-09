import { registerDecorator, ValidationOptions } from 'class-validator';
import {CheckAuthorIdExistValidator} from "./checkAuthorIdExistValidator";


export function CheckAuthorIdExist(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: CheckAuthorIdExistValidator,
        });
    };
}