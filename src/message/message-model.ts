import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {User} from "../users/user-model";
import {Chat} from "../chat/chat-model";

interface MessageCreationAttributes{
   chatId: number;
   userId: number;
   text: string;
}

@Table({tableName: 'messages'})
export class Message extends Model<Message, MessageCreationAttributes> {


    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    text: string;


    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    user: User

    @ForeignKey(() => Chat)
    @Column({type: DataType.INTEGER})
    chatId: number;

    @BelongsTo(() => Chat)
    chat: Chat

}