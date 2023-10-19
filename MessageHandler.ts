import { IMessageDTO } from './MessageDTO';

export interface IMessageHandler {
    handle(message: IMessageDTO): void;
}