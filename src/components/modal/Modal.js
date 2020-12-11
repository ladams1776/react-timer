import React from 'react';
import PropTypes from "prop-types";
import { Button } from 'components';
import styles from './Modal.module.css';

const Modal = ({ children, setIsShowing }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <Button className={styles.closeButton} onClick={() => setIsShowing(false)}>X</Button>
                {children && children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    children: PropTypes.object,
    setIsShowing: PropTypes.func
}

export default Modal;