import * as admin from 'firebase-admin';
import {MessageModel} from "../models/message/message.model";
import {MessagePlace} from "../enums/messagePlace.enum";
import {firestore} from "firebase-admin";
import {MessageStatus} from "../enums/messageStatus.enum";
import {RelationshipRepository} from "./relationship.repository";
import {RoomRepository} from "./room.repository";

admin.apps.length ? admin.app() : admin.initializeApp();
const db = admin.firestore();

export class MessageRepository {

    private messageCollection;
    private relationshipRepository:RelationshipRepository = new RelationshipRepository();
    private roomRepository: RoomRepository = new RoomRepository();

    constructor(private place: MessagePlace, private groupId: string, private authorId:string) {

        if(this.place == MessagePlace.RELATIONSHIP){
            this.messageCollection = db.collection('relationship').doc(groupId).collection('message');
        }
        else {
            this.messageCollection = db.collection('room').doc(groupId).collection('message');
        }
    }

    async addNewMessage(message: MessageModel): Promise<MessageModel> {
        const doc: firestore.DocumentReference = this.messageCollection.doc();
        let usersId: string[] = [];
        if(this.place == MessagePlace.RELATIONSHIP){
            usersId = await this.relationshipRepository.getUsersInRelationship(this.groupId,this.authorId);
        }
        if(this.place == MessagePlace.ROOM){
            usersId = await this.roomRepository.getUsersInRelationship(this.groupId);
        }
        for(const id of usersId){
            message.userStatus[id] = {
                status: MessageStatus.IS_SENT,
                date: new Date(),
            }
        }
        await doc.set(message.toDocument());
        const docSnapshot: firestore.DocumentSnapshot = await doc.get();
        return MessageModel.fromDocument(doc.id,this.groupId,docSnapshot.data() as firestore.DocumentData);
    }

}