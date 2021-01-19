import React from "react";
import s from './button.module.css';
import cl from 'classnames';

const Button = ({color = null, children, className, ...props}) => {
    const buttonClasses = [s.button];
    if (color) {
        buttonClasses.push(s['btn-' + color]);
    }
    return (
        <button className={cl(buttonClasses, className)} {...props}>{children}</button>
    );
}

export default Button;
