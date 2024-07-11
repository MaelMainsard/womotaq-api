import {UserInterface} from "./user.interface";

export class UserModel implements UserInterface{
    createdAt: Date;
    isConnected: boolean;
    isSuperAdmin: boolean;
    photo: string;
    username: string;
    usernameLowercase: string;

    constructor({createdAt,isConnected,isSuperAdmin,photo,username, usernameLowercase}:UserInterface){
        this.createdAt = createdAt;
        this.isConnected = isConnected;
        this.isSuperAdmin = isSuperAdmin;
        this.photo = photo;
        this.username = username;
        this.usernameLowercase = usernameLowercase;
    }

    toDocument(): Record<string, any> {
        return {
            'createdAt': this.createdAt,
            'isConnected': this.isConnected,
            'isSuperAdmin': this.isSuperAdmin,
            'photo': this.photo,
            'username': this.username,
            'usernameLowercase': this.usernameLowercase,
        };
    }

    static fromDocument(doc: Record<string, any>): UserModel {
        return new UserModel({
            createdAt: doc['createdAt'] as Date,
            isConnected: doc['isConnected'] as boolean,
            isSuperAdmin: doc['isSuperAdmin'] as boolean,
            photo: doc['photo'] as string,
            username: doc['username'] as string,
            usernameLowercase: doc['usernameLowercase'] as string,
        });
    }

    toString(): string {
        return `RoomEntity: {
        createdAt: ${this.createdAt},
        isConnected: ${this.isConnected},
        isSuperAdmin: ${this.isSuperAdmin},
        photo: ${this.photo},
        username: ${this.username},
        usernameLowercase: ${this.usernameLowercase},
      }`;
    }
}