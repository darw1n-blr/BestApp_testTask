import {BelongsToMany, Column, DataType, HasMany, Model, Table} from 'sequelize-typescript';
import {User} from "../users/user-model";
import {UserChats} from "./user-chats-model";
import {Message} from "../message/message-model";

interface ChatCreationAttributes{
    name: string;
    users: number[]
}

@Table({tableName: 'chats'})
export class Chat extends Model<Chat, ChatCreationAttributes> {


    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @BelongsToMany(() => User, () => UserChats)
    users: User[];

    @HasMany(() => Message)
    messages: Message[];

}