import React from "react";
import "../css/styles.css"

function Button(props) {
    let className;

    // Conditions for checking all the props.
    if (props.color === 'default1') {
        className = 'defaultBttn';
    } else if (props.variant === 'outline') {
        className = 'outline';
    } else if (props.variant === 'text') {
        className = 'textVariant';
    } else if (props.disableShadow === 'disableShadow') {
        className = 'disableShadow';
    } else if (props.disable === 'disable') {
        className = "disabledBttn";
    } else if (props.variant === 'text disable') {
        className = 'textDisabledBttn';
    } else if (props.icon === 'startIcon') {
        className = "startIconBttn";
    } else if (props.icon === 'endIcon') {
        className = 'endIconBttn';
    } else if (props.size === 'sm') {
        className = 'smBttn';
    } else if (props.size === 'md') {
        className = 'mdBttn';
    } else if (props.size === 'lg') {
        className = 'lgBttn';
    } else if (props.color === 'default') {
        className = 'default2';
    } else if (props.color === 'primary') {
        className = 'primaryBttn';
    } else if (props.color === 'secondary') {
        className = 'secondaryBttn';
    } else if (props.color === 'danger') {
        className = 'dangerBttn';
    }

    return (
        <div className="wrapper">
            <p>{props.text}</p>
            <button 
                type={props.type} 
                className={className}>{props.textContent}</button>
        </div>
    )
}

export default Button;