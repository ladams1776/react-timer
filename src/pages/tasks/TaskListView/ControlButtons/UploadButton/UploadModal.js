import React from 'react';
import { Modal } from 'components';
import DropZone from './DropZone/DropZone';

const UploadModal = ({ isShowing, setIsShowing }) => {
    return isShowing
        ? (<Modal setIsShowing={setIsShowing}>
            <DropZone onClick={setIsShowing} />
        </Modal>)
        : [];
};

export default UploadModal;