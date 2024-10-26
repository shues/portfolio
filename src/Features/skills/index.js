import React from "react";
import './index.css';
import { List } from "../../Entities/list";

export function Skills(props) {
    const items = [
        { id: "js", text: "JavaScript / TypeScript" },
        { id: "react", text: "React" },
        { id: "redux", text: "Redux" },
        { id: "node", text: "Node.js" },
        { id: "html", text: "HTML" },
        { id: "css", text: "CSS / SCSS" },
        { id: "php", text: "PHP" },
        { id: "mysql", text: "MySQL" },
        { id: "docker", text: "Docker / Docker-compose" },
        { id: "git", text: "Git / Gitlab" },
        { id: "cicd", text: "CI / CD" },
    ];
    return (
        <div classtext="skills">
            <h2>Навыки</h2>
            <List items={items} />
        </div>
    )
}