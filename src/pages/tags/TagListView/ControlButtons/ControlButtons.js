import React from 'react';
import { useBrowserHistory } from 'hooks';
import NewButton from './NewButton/NewButton';
import styles from './ControlButtons.module.css';

const ControlButtons = () => {
  const { push } = useBrowserHistory();
  return (
    <div className={styles.controlButtons} data-test-id="control-buttons">
      <button className="glyphicon glyphicon-home" onClick={() => { push("/") }} />
      <NewButton />
    </div>
  );
};

export default ControlButtons;
