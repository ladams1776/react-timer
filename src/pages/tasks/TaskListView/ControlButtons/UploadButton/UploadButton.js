import React, { useState } from 'react';
import cn from 'classnames';
import { Button } from 'components';
import UploadModal from './UploadModal';
import styles from './UploadButton.module.css';

const UploadButton = () => {
    const [isModalShowing, setIsModalShowing] = useState(false);

    return (<>
        <Button className={cn(styles.uploadButton, "glyphicon glyphicon-arrow-up mr-5px")} onClick={setIsModalShowing}  title="Upload File"/>
        <UploadModal isShowing={isModalShowing} setIsShowing={setIsModalShowing} data-testid="uploadModal"/>
    </>);
};

export default UploadButton;