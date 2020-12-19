import React from 'react';
import { Modal } from 'components';
import DropZone from './DropZone/DropZone';
import styles from './UploadModal.module.css'

const UploadModal = ({ isShowing, setIsShowing }) => {
    return isShowing
        ? (<Modal setIsShowing={setIsShowing}>
            <DropZone onClick={setIsShowing} />
        </Modal>)
        : [];
};

export default UploadModal;