import { registerDecorator, ValidationOptions } from 'class-validator';
import {CheckGroupIdExistValidator} from "./checkGroupIdExistValidator";

export function CheckGroupIdExist(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: CheckGroupIdExistValidator,
        });
    };
}