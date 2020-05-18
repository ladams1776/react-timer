import React from 'react';
import useBrowserHistoryPush from 'hooks/useBrowserHistoryPush';
import DeleteButton from './DeleteButton/DeleteButton';
import DownloadButton from './DownloadButton/DownloadButton';
import styles from './ControlButtons.module.css';

const ControlButtons = () => {
  const { push } = useBrowserHistoryPush();

  return (
    <>
      <DeleteButton />
      <DownloadButton />
      <div className={styles.buttonAdd} data-test-id="btn-new"
        onClick={() => { push("/task/-1") }}>
        <span className="glyphicon glyphicon-plus mr-5px" />
        New Task
      </div>
    </>
  )
};

export default ControlButtons;
