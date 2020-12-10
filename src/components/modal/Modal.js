import React from 'react';
import { Button } from 'components';
import styles from './Modal.module.css';

const Modal = ({ children, setIsShowing }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <Button className={styles.closeButton} onClick={() => setIsShowing(false)}>X</Button>
                {children}
            </div>
        </div>
    );
};

export default Modal;