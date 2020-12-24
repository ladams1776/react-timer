import React from 'react';
import PropTypes from "prop-types";
import cn from 'classnames';
import { useRippleEffect } from 'hooks';
import styles from './Button.module.css';


const Button = ({ className, onClick, value, children, testid, ...rest }) => {
  const clickCallback = useRippleEffect('button', onClick);
  return (<button className={cn('btn', 'btn-default', 'navbar-btn', styles.baseBtn, className)}
    onClick={clickCallback}
    data-testid={testid}
    {...rest}>
    {children}
    {value}
  </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  children: PropTypes.element,
  title: PropTypes.string,
  testid: PropTypes.string
}

export default Button;
