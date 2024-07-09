import * as admin from 'firebase-admin';
import { RoomInterface} from "../models/room/room.interface";

admin.apps.length ? admin.app() : admin.initializeApp();
const db = admin.firestore();

export class RoomRepository {

    private roomCollection = db.collection('room');

    async getRoomById(groupId: string): Promise<RoomInterface | null> {
        const doc = await this.roomCollection.doc(groupId).get();
        if (doc.exists) {
            return doc.data() as RoomInterface;
        }
        return null;
    }

}