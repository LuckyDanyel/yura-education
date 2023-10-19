import MessageSender from "./MessageSender";
import { IMessageDTO } from "./MessageDTO";


const messageSender = new MessageSender();

const message: IMessageDTO = {
    id: 1,
    message: 'Какое-то сообщение!',
}
messageSender.send(message, 'EMAIL'); // Отправляет на Email
messageSender.send(message, 'LOCAL'); // Отправляем локально
messageSender.send(message, ''); // Неизвестный тип отправки, поэтмоу здесь можно обработать exception
