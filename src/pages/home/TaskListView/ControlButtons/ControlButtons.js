import React from 'react';
import DownloadButton from './DownloadButton/DownloadButton';
import NewButton from './NewButton/NewButton';
import styles from './ControlButtons.module.css';
import HomeButton from './HomeButton/HomeButton';
import ImportButton from './ImportButton/ImportButton';
import DropZone from './DropZone/DropZone';
import UploadButton from './UploadButton/UploadButton';

const ControlButtons = tasks => {
  return <div className={styles.controlButtons} data-test-id="control-buttons">
    <HomeButton />
    <DownloadButton tasks={tasks} />
    <UploadButton />
    {/* <ImportButton /> */}
    <NewButton />
    {/* <DropZone /> */}
  </div>
};

export default ControlButtons;
