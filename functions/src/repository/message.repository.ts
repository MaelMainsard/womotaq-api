import * as admin from 'firebase-admin';
import {MessageModel} from "../models/message/message.model";
import {MessagePlace} from "../enums/messagePlace.enum";
import {firestore} from "firebase-admin";

admin.apps.length ? admin.app() : admin.initializeApp();
const db = admin.firestore();

export class MessageRepository {

    private messageCollection;

    constructor(place: MessagePlace, private groupId: string) {

        if(place == MessagePlace.RELATIONSHIP){
            this.messageCollection = db.collection('relationship').doc(groupId).collection('message');
        }
        else {
            this.messageCollection = db.collection('room').doc(groupId).collection('message');
        }
    }

    async addNewMessage(message: MessageModel): Promise<MessageModel> {
        try {
            const doc: firestore.DocumentReference = this.messageCollection.doc();
            await doc.set(message.toDocument());
            const docSnapshot: firestore.DocumentSnapshot = await doc.get();
            return MessageModel.fromDocument(doc.id,this.groupId,docSnapshot.data() as firestore.DocumentData);
        } catch (error) {
            throw error;
        }
    }


}