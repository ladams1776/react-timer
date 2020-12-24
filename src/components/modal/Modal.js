import React from 'react';
import PropTypes from "prop-types";
import { Button } from 'components';
import styles from './Modal.module.css';

const Modal = ({ children, setIsShowing }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <Button className={styles.closeButton} onClick={() => setIsShowing(false)} value="X"/>
                {children && children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    children: PropTypes.element,
    setIsShowing: PropTypes.func
}

export default Modal;