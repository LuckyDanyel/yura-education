import { IMessageHandler } from "./MessageHandler";
import { IMessageDTO } from "./MessageDTO";

class MessageHandlerEmpty implements IMessageHandler {
    handle(message: IMessageDTO): void {
        console.log('Вы используете непонятный тип отправки сообщения', message);
        throw new Error; // Выкидываем exeption на верх, чтобы MessageSender обработал и что-то сделал.
        //P.S. класс MessageHandlerEmpty ничего не знает о MessageSender, здесь я просто добавил для наглядности
    }
}

export default MessageHandlerEmpty;