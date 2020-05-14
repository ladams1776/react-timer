// @TODO: Left off here moving the 3 buttons from TaskListView over into this component
// @TODO: Then we want to control when to display the other 2 buttons
// @TODO: Based on if there are any tasks. So we might be pushing Tasks into the context as well and
// @TODO: Creating a new context or adding to the existing one.
import React from 'react';
import { NavLink } from 'react-router-dom';
import DeleteButton from './DeleteButton/DeleteButton';
import DownloadButton from './DownloadButton/DownloadButton';
import styles from './ControlButtons.module.css';

const ControlButtons = () => {



  return (
    <>
      <DeleteButton />
      <DownloadButton />
      <NavLink to={'/task/-1'} className={styles.buttonAdd} data-test-id="btn-new">
        <span className="glyphicon glyphicon- plus mr-5px" />
        New Task
    </NavLink >
    </>
  );
};

export default ControlButtons;
