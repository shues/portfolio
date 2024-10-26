import React from "react";
import './index.css';

export function Block(props){
    return(
        <div className={"block block_" + props.theme}>
            {props.children}
        </div>
    )
}