import { IMessageHandler } from "./MessageHandler";
import { IMessageDTO } from "./MessageDTO";

class MessageHandlerLocal implements IMessageHandler {
    handle(message: IMessageDTO): void {
        console.log('local logic message', message);
    }
}

export default MessageHandlerLocal;