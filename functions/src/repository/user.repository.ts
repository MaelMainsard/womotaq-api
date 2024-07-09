import * as admin from 'firebase-admin';
import { UserInterface} from "../models/user/user.interface";

admin.apps.length ? admin.app() : admin.initializeApp();
const db = admin.firestore();

export class UserRepository {

    private userCollection = db.collection('user');

    async getUserById(authorId: string): Promise<UserInterface | null> {
        const doc = await this.userCollection.doc(authorId).get();
        if (doc.exists) {
            return doc.data() as UserInterface;
        }
        return null;
    }

}