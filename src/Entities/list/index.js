import React from "react";
import './index.css';

export function List(props) {
    const items = props.items.map(item => <li className="list-item" key={item.id}>{item.text}</li>)
    return (
        <ul className="list">
            {items}
        </ul>
    )
}