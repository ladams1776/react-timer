import React from 'react';
import DownloadButton from './DownloadButton/DownloadButton';
import NewButton from './NewButton/NewButton';
import styles from './ControlButtons.module.css';

const ControlButtons = tasks => {
  return (
    <div className={styles.controlButtons} data-test-id="control-buttons">
      <DownloadButton tasks={tasks} />
      <NewButton />
    </div>
  )
};

export default ControlButtons;
