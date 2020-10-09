import React from "react";

import "../css/styles.css"

function Button(props) {
    return (
        <div>
            <p>{props.text}</p>
            <button 
                type={props.type} 
                className={props.name}>{props.textContent}</button>
        </div>
    )
}

export default Button;