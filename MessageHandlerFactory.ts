import { IMessageHandler } from "./MessageHandler";
import MessageHandlerEmail from "./MessageHandlerEmail";
import MessageHandlerLocal from "./MessageHandlerLocal";
import MessageHandlerEmpty from "./MessageHandlerEmpty";


class MessageHandlerFacotry {

    getFactoryByTypeMessageSend(typeMessage: 'EMAIL' | 'LOCAL' | ''): IMessageHandler {
        if(typeMessage === 'EMAIL') return new MessageHandlerEmail();
        else if (typeMessage === 'LOCAL') return new MessageHandlerLocal();
        else return new MessageHandlerEmpty();
    }
}

export default MessageHandlerFacotry;