import * as admin from 'firebase-admin';
import {RoomModel} from "../models/room/room.model";
import {firestore} from "firebase-admin";

admin.apps.length ? admin.app() : admin.initializeApp();
const db = admin.firestore();

export class RoomRepository {

    private roomCollection = db.collection('room');

    async getRoomById(groupId: string): Promise<RoomModel | null> {
        const doc = await this.roomCollection.doc(groupId).get();
        if (doc.exists) {
            return RoomModel.fromDocument(doc.data()!);
        }
        return null;
    }

    async getUsersInRelationship(groupId: string): Promise<string[]> {
        const doc: firestore.DocumentReference = this.roomCollection.doc(groupId);
        const docSnapshot: firestore.DocumentSnapshot = await doc.get();
        return Object.keys(docSnapshot.data()!.users);
    }

}