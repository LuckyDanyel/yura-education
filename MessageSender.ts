import { IMessageDTO } from "./MessageDTO";
import MessageHandlerFacotry from "./MessageHandlerFactory";

class MessageSender {
    send(message: IMessageDTO, typeMessage: 'EMAIL' | 'LOCAL' | ''): void {
        try {
            const messageHandlerFactory = new MessageHandlerFacotry();
            const messageHandler = messageHandlerFactory.getFactoryByTypeMessageSend(typeMessage);
            //....some-logic
            messageHandler.handle(message)
        } catch (error) {
            console.log('Что-то пошло не так'); // Здесь в случае ошибки можно вернуть клиенту, который пытается отправить сообщение, что пошло что-то не так   
        }
    }
}

export default MessageSender;