import { IMessageDTO } from "./MessageDTO";
import MessageHandlerFacotry from "./MessageHandlerFactory";

class MessageSender {
    send(message: IMessageDTO, typeMessage: 'EMAIL' | 'LOCAL' | ''): void {
        try {
            const messageHandlerFactory = new MessageHandlerFacotry();
            const messageHandler = messageHandlerFactory.getFactoryByTypeMessageSend(typeMessage); // Здесь не совсем правильное название. 
                                                                                                  // getFactoryByTypeMessageSend - Подразумевает, что мы возвращаем фабрику, а мы возвращаем уже конкретную реализацию
                                                                                                // Правильно будет назвать как-то так - getMessageHandlerByTypeMessageSend
            //....some-logic
            messageHandler.handle(message)
        } catch (error) {
            console.log('Что-то пошло не так'); // Здесь в случае ошибки можно вернуть клиенту, который пытается отправить сообщение, что пошло что-то не так   
        }
    }
}

export default MessageSender;
