import * as admin from 'firebase-admin';
// import { UserInterface} from "../models/user/user.interface";
import {MessageModel} from "../models/message/message.model";

admin.apps.length ? admin.app() : admin.initializeApp();
const db = admin.firestore();

export class MessageRepository {

    private messageInRelationshipCollection;
   // private messageInRoomCollection;

    constructor(private id: string) {
        this.messageInRelationshipCollection = db.collection('relationship').doc(this.id).collection('message');
        //this.messageInRoomCollection = db.collection('room').doc(this.id).collection('message');
    }

    async addNewMessageInRelationship(message: MessageModel): Promise<void> {
        await this.messageInRelationshipCollection.add(message);
    }


}