import React from 'react';
import cn from 'classnames';

const Button = ({ className, onClick, disabled, value, children }) => {
    return <button
        className={cn("btn", "btn-default", "navbar-btn", className)}
        onClick={event => onClick(event)}
        disabled={disabled}>
        {children}
        {value} 
    </button>
};

export default Button;