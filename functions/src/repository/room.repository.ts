import * as admin from 'firebase-admin';
import {RoomModel} from "../models/room/room.model";
import {RoomEntity} from "../models/room/room.entity";

admin.apps.length ? admin.app() : admin.initializeApp();
const db = admin.firestore();

export class RoomRepository {

    private roomCollection = db.collection('room');

    async getRoomById(groupId: string): Promise<RoomModel | null> {
        const doc = await this.roomCollection.doc(groupId).get();
        if (doc.exists) {
            return RoomModel.fromEntity(RoomEntity.fromDocument(doc.data()!));
        }
        return null;
    }

}