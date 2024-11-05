import {BelongsToMany, Column, DataType, HasMany, Model, Table} from 'sequelize-typescript';
import {UserChats} from "../chat/user-chats-model";
import {Chat} from "../chat/chat-model";
import {Message} from "../message/message-model";

interface UserCreationAttributes{
    username: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttributes> {


    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    username: string;

    @BelongsToMany(type => Chat, () => UserChats)
    chats: Chat[];

    @HasMany(() => Message)
    messages: Message[];


}