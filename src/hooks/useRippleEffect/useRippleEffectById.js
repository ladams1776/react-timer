import { useEffect } from 'react';
import './ripple-style.css';

const useRippleEffectById = (id, onClick) => {
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

    useEffect(() => {
        if(id) {
            const element = document.getElementById(id);
            element.addEventListener("click", createRipple);
    
            return () => {
                element.removeEventListener("click", createRipple);
            };
        }
    }, []);

    return event => {
        setTimeout(() => onClick(event), BUTTON_DELAY_FOR_MATERIAL_EFFECT);
    }
};

export default useRippleEffectById;