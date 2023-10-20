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

// Плюсы:
// + Поддерживаемость и расширяемость. Если надо будет добавить или удалить какой-то messageHandler, ты сделаешь это в одном месте в фабрике и при этом никак не затронешь логику метода send
// + Написание юнит тестов значительно упростилось. Для метода send теперь не придется писать тесты на условия -> if(typeMessage === 'EMAIL') и т.д. Тесты на эти if будут написаны в MessageHandlerFacotry
// + Разделение ответственности. Благодаря этому, теперь стало легче читать метод send, так как код не захломляется ненужными if по типу -> if(typeMessage === 'EMAIL') {  ...logic for email sender }

// Минусы:
// А их нет, минусы для геев очевидно
