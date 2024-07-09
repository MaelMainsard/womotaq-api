import {UserInterface} from "./user.interface";
import {UserEntity} from "./user.entity";

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

    toEntity(): UserEntity {
        return new UserEntity({
            createdAt: this.createdAt,
            isConnected: this.isConnected,
            isSuperAdmin: this.isSuperAdmin,
            photo: this.photo,
            username: this.username,
            usernameLowercase: this.usernameLowercase
        });
    }

    static fromEntity(entity: UserEntity): UserModel {
        return new UserModel({
            createdAt: entity.createdAt,
            isConnected: entity.isConnected,
            isSuperAdmin: entity.isSuperAdmin,
            photo: entity.photo,
            username: entity.username,
            usernameLowercase: entity.usernameLowercase
        });
    }
}