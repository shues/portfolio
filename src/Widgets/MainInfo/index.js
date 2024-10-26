import React from "react";
import './index.css';
import { AboutMe } from "../../Features/aboutMe";
import { Name } from "../../Features/name";
import { Specialization } from "../../Features/specialization";
import { TeamWork } from "../../Features/teamWork";
import { Technologies } from "../../Features/technologies";
import { Hobby } from "../../Features/hobby";

export function MainInfo(props) {
    return (
        <div className="main-info">
            <Name />
            <Specialization />
            <AboutMe />
            <TeamWork />
            <Technologies />
            <Hobby />
        </div>
    )
}