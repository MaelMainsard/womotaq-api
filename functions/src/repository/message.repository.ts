import * as admin from 'firebase-admin';
import {MessageModel} from "../models/message/message.model";
import {MessagePlace} from "../enums/messagePlace.enum";


admin.apps.length ? admin.app() : admin.initializeApp();
const db = admin.firestore();

export class MessageRepository {

    private messageCollection;

    constructor(place: MessagePlace, groupId: string) {
        if(place == MessagePlace.RELATIONSHIP){
            this.messageCollection = db.collection('relationship').doc(groupId).collection('message');
        }
        else {
            this.messageCollection = db.collection('room').doc(groupId).collection('message');
        }
    }

    async addNewMessage(message: MessageModel): Promise<void> {
        const doc:any = this.messageCollection.doc()
        message.id = doc.id;
        doc.set(message.toDocument());
    }


}