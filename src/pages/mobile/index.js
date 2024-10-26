import React from "react";
import './index.css';
import { Photo } from "../../Features/photo";
import { Name } from "../../Features/name";
import { Specialization } from "../../Features/specialization";
import { Contacts } from "../../Features/contacts";
import { Skills } from "../../Features/skills";
import { Education } from "../../Features/education";
import { AboutMe } from "../../Features/aboutMe";
import { TeamWork } from "../../Features/teamWork";
import { Hobby } from "../../Features/hobby";
import { Technologies } from "../../Features/technologies";
import { Block } from "../../Entities/block";

export function Mobile(props) {
    const items = [
        [
            <Photo />,
            <Name />,
            <Specialization />,
            <Contacts />
        ],
        <Skills />,
        <Education />,
        <AboutMe />,
        <TeamWork />,
        <Technologies />,
        <Hobby />,
    ].map((item, i)=><Block key={i} theme={i%2===0?'dark':'light'}>{item}</Block>)
    return (
        <div className="mobile-conteiner">
            {items}
        </div>
    )
}