import * as admin from 'firebase-admin';
import {RelationshipInterface} from "../models/relationship/relationship.interface";

admin.initializeApp();
const db = admin.firestore();

export class RelationshipRepository {

    private relationshipCollection = db.collection('relationship');

    async getRelationShipById(groupId: string): Promise<RelationshipInterface | null> {
        const doc = await this.relationshipCollection.doc(groupId).get();
        if (doc.exists) {
            return doc.data() as RelationshipInterface;
        }
        return null;
    }

}