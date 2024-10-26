import React from "react";
import './index.css';
import { List } from "../../Entities/list";
import { Title } from "../../Entities/title";

export function AboutMe(props) {
    const items = [
        { id: "spa", text: "Одностраничных приложений (SPA)." },
        { id: "widgets", text: "Виджетов, которые можно встроить в любую веб страницу." },
        { id: "sites", text: "Полноценных многостраничных сайтов с серверной частью и базой данных." }
    ];
    return (
        <div className="about-me">
            {/* <h2 className="about-me__header">Обо мне</h2> */}
            <Title range={2} text="Обо мне" theme={props.theme === 'dark' ? 'light' : 'dark'} />
            <p>
                Мой основной профиль - это фронтэнд разработка.
                <br />
                Я занимаюсь проектированием и созданием:
            </p>
            <List items={items} />
        </div>
    )
}