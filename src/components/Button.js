import React from 'react';
import PropTypes from "prop-types";
import cn from 'classnames';
import { useRippleEffect} from 'hooks';
import styles from './Button.module.css';


const Button = ({ className, onClick, disabled, value, children, title, testid }) => {
  const clickCallback = useRippleEffect('Button', onClick);
  return (<button className={cn('btn', 'btn-default', 'navbar-btn', styles.baseBtn, className)}
    onClick={clickCallback}
    data-testid={testid}
    disabled={disabled}
    title={title}>
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
