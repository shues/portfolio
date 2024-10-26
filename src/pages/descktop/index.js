import React from "react";
import './index.css';
import { Side } from "../../Widgets/Side";
import { MainInfo } from "../../Widgets/MainInfo";

export function Descktop(){
    return (
        <div className="descktop-conteiner">
            <Side />
            <MainInfo />
        </div>
    );
}