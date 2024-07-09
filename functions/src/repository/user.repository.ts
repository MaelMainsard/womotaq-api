import * as admin from 'firebase-admin';
import {UserModel} from "../models/user/user.model";
import {UserEntity} from "../models/user/user.entity";

admin.apps.length ? admin.app() : admin.initializeApp();
const db = admin.firestore();

export class UserRepository {

    private userCollection = db.collection('user');

    async getUserById(authorId: string): Promise<UserModel | null> {
        const doc = await this.userCollection.doc(authorId).get();
        if (doc.exists) {
            return UserModel.fromEntity(UserEntity.fromDocument(doc.data()!));
        }
        return null;
    }

}