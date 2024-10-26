import React from "react";
import './index.css';

export function Title(props) {

    const H = 'h' + props.range;

    // H.className = "123";

    return (
        <H>
            {props.text}
        </H>
    )
}