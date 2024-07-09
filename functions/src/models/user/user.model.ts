import {UserInterface} from "./user.interface";

export class UserModel implements UserInterface{
    createdAt: Date;
    isConnected: boolean;
    isSuperAdmin: boolean;
    photo: string;
    username: string;
    usernameLowercase: string;

    constructor(
        createdAt: Date,
        isConnected: boolean,
        isSuperAdmin: boolean,
        photo: string,
        username: string,
        usernameLowercase: string
    ){
        this.createdAt = createdAt;
        this.isConnected = isConnected;
        this.isSuperAdmin = isSuperAdmin;
        this.photo = photo;
        this.username = username;
        this.usernameLowercase = usernameLowercase;
    }
}