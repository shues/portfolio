import React from "react";
import './index.css';
import { Title } from "../../Entities/title";
import { List } from "../../Entities/list";

export function Hobby(props) {
    const items = [
        {id:1, text:"Решение головоломок"},
        {id:2, text:"Чтение"},
        {id:3, text:"Создание электронных устройств"},
        {id:4, text:"Садоводство"},
        {id:5, text:"Рыбалка"},
        {id:6, text:"Походы"},
    ];
    return (
        <div className="hobby">
            <Title range={2} text="Увлечения" />
            <List items={items} />
        </div>
    );
}