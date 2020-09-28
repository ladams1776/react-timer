import React, { useState } from 'react';
import cn from 'classnames';
import UploadModal from './UploadModal';
import styles from './UploadButton.module.css';

const UploadButton = () => {
    const [isModalShowing, setIsModalShowing] = useState(false);

    return (<>
        <button className={cn(styles.uploadButton, "glyphicon glyphicon-arrow-up mr-5px")} onClick={setIsModalShowing}  title="Upload File"/>
        <UploadModal isShowing={isModalShowing} setIsShowing={setIsModalShowing} />
    </>);
};

export default UploadButton;