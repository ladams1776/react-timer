import React, { useEffect } from 'react';
import cn from 'classnames';
import './ripple-style.css';
import styles from './Button.module.css';

const BUTTON_DELAY_FOR_MATERIAL_EFFECT = 250;

const createRipple = event => {
  const button = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
  circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
  circle.classList.add('ripple');

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
};

const Button = ({ className, onClick, disabled, value, children, title, testid }) => {

  useEffect(() => {
    const buttons = document.getElementsByTagName("button");
    for (const button of buttons) {
      button.addEventListener("click", createRipple);
    }

    return () => {
      for (const button of buttons) {
        button.removeEventListener("click", createRipple);
      }
    };
  }, []);

  return (
    <button className={cn('btn', 'btn-default', 'navbar-btn', styles.baseBtn, className)}
      data-testid={testid}
      onClick={event => {
        setTimeout(() => onClick(event), BUTTON_DELAY_FOR_MATERIAL_EFFECT);
      }}
      disabled={disabled} title={title}>
      {children}
      {value}
    </button>
  );
};

export default Button;
