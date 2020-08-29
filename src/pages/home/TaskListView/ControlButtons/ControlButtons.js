import React from 'react';
import { useBrowserHistory } from 'hooks';
import DownloadButton from './DownloadButton/DownloadButton';
import NewButton from './NewButton/NewButton';
import styles from './ControlButtons.module.css';
import HomeButton from './HomeButton/HomeButton';

const ControlButtons = tasks => {
  const { push } = useBrowserHistory();

  return (
    <div className={styles.controlButtons} data-test-id="control-buttons">
      <HomeButton />
      <DownloadButton tasks={tasks} />
      <NewButton />
    </div>
  )
};

export default ControlButtons;
