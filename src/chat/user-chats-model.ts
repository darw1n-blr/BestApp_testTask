    import {Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
    import {Chat} from "./chat-model";
    import {User} from "../users/user-model";


    @Table({tableName: 'user-chats', updatedAt: false, createdAt: false})
    export class UserChats extends Model<UserChats> {


        @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
        id: number;


        @ForeignKey(() => Chat)
        @Column({type: DataType.INTEGER})
        chatId: number;

        @ForeignKey(() => User)
        @Column({type: DataType.INTEGER})
        userId: number;


    }