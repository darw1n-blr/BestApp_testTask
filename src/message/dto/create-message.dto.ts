export class CreateMessageDto {
    readonly chatId: number;
    readonly userId: number;
    readonly text: string;
}