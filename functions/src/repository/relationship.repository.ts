import * as admin from 'firebase-admin';
import {RelationshipModel} from "../models/relationship/relationship.model";

admin.apps.length ? admin.app() : admin.initializeApp();
const db = admin.firestore();

export class RelationshipRepository {

    private relationshipCollection = db.collection('relationship');

    async getRelationShipById(groupId: string): Promise<RelationshipModel | null> {
        const doc = await this.relationshipCollection.doc(groupId).get();
        if (doc.exists) {
            return RelationshipModel.fromDocument(doc.data()!);
        }
        return null;
    }

}