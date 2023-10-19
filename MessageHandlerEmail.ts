import { IMessageHandler } from "./MessageHandler";
import { IMessageDTO } from "./MessageDTO";

class MessageHandlerEmail implements IMessageHandler {
    handle(message: IMessageDTO): void {
        console.log('email logic message', message);
    }
}

export default MessageHandlerEmail;