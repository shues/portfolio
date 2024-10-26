import React from "react";
import './index.css';

export function Header(props) {
    const [language, setLangage] = React.useState('english');
    const [theme, setTheme] = React.useState('light');

    function changeTheme() {
        setTheme(prev => prev === "light" ? "dark" : "light");
    }

    return (
        <div className="header">
            <div className="header__button">

            </div>
            <div className="header__button" onClick={changeTheme}>
                {theme === "light" ? "🌙" : "🔆"}
            </div>
        </div>
    );
}