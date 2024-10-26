import React from "react";
import './index.css';
import { Title } from "../../Entities/title";
import { List } from "../../Entities/list";

export function Technologies(props) {
    const itemsClient = [
        { id: 1, text: "верстка," },
        { id: 2, text: "адаптивная верстка," },
        { id: 3, text: "семантическая верстка," },
        { id: 4, text: "css анимации," },
        { id: 5, text: "обработка событий вызываемых пользователем," },
        { id: 6, text: "клиент-серверное взаимодействие через API," },
        { id: 7, text: "взаимодействие между страницами открытыми в разных вкладках," },
        { id: 8, text: "проектирование архитектуры SPA," },
        { id: 13, text: "авторизация посредством аккаунта Google," },
        { id: 14, text: "авторизация через соцсети (vk, linkedIn)," },
        { id: 15, text: "авторизация через телеграм," },
        { id: 18, text: "взаимодействие с сервером посредством сокетов," },
        { id: 21, text: "работа с графическими библиотеками(three.js, chart.js)," },        
    ]

    const itemsServer = [
        { id: 9, text: "проектирование и создание API," },
        { id: 10, text: "проектирование и создание баз данных," },
        { id: 11, text: "создание и оптимизация запросов к базам данных," },
        { id: 12, text: "авторизация с JWT-tokens," },
        { id: 16, text: "авторизация через LDAP," },
        { id: 17, text: "создание и сопровождение телеграм ботов," },
        { id: 19, text: "Взаимодействие с переферийными устройствами (определение уровня тонера в принтере, купюроприемник, сканер штрихкода и т.д.)," },
        { id: 20, text: "взаимодействие с CRM системами (amoCRM)," },
        { id: 22, text: "создание и редактирование PDF документов," },
        { id: 23, text: "парсинг и анализ документов *.doc, *.docx," }
    ]


    return (
        <div className="technologies">
            <Title range={2} text="Технологии с которыми удалось поработать" />
            <Title range={3} text="Фронтэнд" />
            <List items={itemsClient} />
            <Title range={3} text="Бэкэнд" />
            <List items={itemsServer} />
        </div>
    )
}