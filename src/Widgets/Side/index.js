import React from "react";
import './index.css';
import { Photo } from "../../Features/photo";
import { Contacts } from "../../Features/contacts";
import { Skills } from "../../Features/skills";
import { Education } from "../../Features/education";

export function Side(props) {
    return (
        <div className="side">
            <Photo />
            <Contacts />
            <Skills />
            <Education />
        </div>
    );
}