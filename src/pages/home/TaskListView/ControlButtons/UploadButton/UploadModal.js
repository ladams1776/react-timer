import React from 'react';
import DropZone from './DropZone/DropZone';
import styles from './UploadModal.module.css'

const UploadModal = ({ isShowing, setIsShowing }) => {
    return isShowing
        ? (<div className={styles.uploadModal}>
            <DropZone className={styles.dropZone} onClick={setIsShowing}/>
        </div>)
        : [];
};

export default UploadModal;