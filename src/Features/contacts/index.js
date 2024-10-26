import React from "react";
import './index.css';

export function Contacts(props) {
    return (
        <div className="contacts">
            <h2>Контакты</h2>
            <p>
                <span>E-mail: </span>
                {/* <br /> */}
                <a className="contacts__ref" href="mailto:shues.work@gmail.com">shues.work@gmail.com</a>
            </p>
            <p>
                <span>Telegram: </span>
                {/* <br /> */}
                <a className="contacts__ref" href="https://t.me/shues82">@shues82</a>
            </p>
        </div>
    )
}