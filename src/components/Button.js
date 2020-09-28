import React from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

const Button = ({ className, onClick, disabled, value, children, title }) => {
  return (
    <button className={cn('btn', 'btn-default', 'navbar-btn', styles.baseBtn, className)} onClick={event => onClick(event)} disabled={disabled} title={title}>
      {children}
      {value}
    </button>
  );
};

export default Button;
