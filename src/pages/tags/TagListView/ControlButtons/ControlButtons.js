import React from 'react';
import NewButton from './NewButton/NewButton';
import styles from './ControlButtons.module.css';

const ControlButtons = () => {
  return (
    <div className={styles.controlButtons} data-test-id="control-buttons">
      <NewButton />
    </div>
  );
};

export default ControlButtons;
