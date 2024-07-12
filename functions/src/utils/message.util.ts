import {MessageType} from "../enums/messageType.enum";

export class MessageUtil {
    static getMessageType(msg: string): MessageType {
        if(!this.isURL(msg)){
            return MessageType.TEXT;
        }
        else {
            return this.getUrlType(msg);
        }
    }

    private static getUrlType(url: string): MessageType {
        // Extrait l'extension du fichier à partir de l'URL
        const extension = url.split('.').pop()?.toLowerCase();

        if (extension) {
            switch (extension) {
                case 'jpg':
                case 'jpeg':
                case 'png':
                case 'gif':
                case 'bmp':
                    return MessageType.IMAGE;
                case 'mp4':
                case 'avi':
                case 'mov':
                case 'wmv':
                    return MessageType.VIDEO;
                case 'mp3':
                case 'wav':
                case 'ogg':
                case 'flac':
                    return MessageType.AUDIO;
                default:
                    return MessageType.FILE;
            }
        } else {
            return MessageType.TEXT;
        }
    }

    private static isURL(str: string): boolean {
        // Expression régulière pour vérifier si la chaîne est une URL
        const urlRegex = /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|localhost|(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff]{2,}){1,}(?::\d{2,5})?(?:\/[^\s]*)?$)/i;

        return urlRegex.test(str);
    }
}