import React from 'react';
import DeleteButton from './DeleteButton/DeleteButton';
import DownloadButton from './DownloadButton/DownloadButton';
import NewButton from './NewButton/NewButton';
import styles from './ControlButtons.module.css';

const ControlButtons = tasks => {
  return (
    <div className={styles.controlButtons} data-test-id="control-buttons">
      <DeleteButton />
      <DownloadButton tasks={tasks} />
      <NewButton />
    </div>
  )
};

export default ControlButtons;
