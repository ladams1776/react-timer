import React from 'react';
import { useBrowserHistory } from 'hooks';
import DownloadButton from './DownloadButton/DownloadButton';
import NewButton from './NewButton/NewButton';
import styles from './ControlButtons.module.css';

const ControlButtons = tasks => {
  const { push } = useBrowserHistory();

  return (
    <div className={styles.controlButtons} data-test-id="control-buttons">
      <button className="glyphicon glyphicon-home" onClick={() => { push("/tag") }} />
      <DownloadButton tasks={tasks} />
      <NewButton />
    </div>
  )
};

export default ControlButtons;
