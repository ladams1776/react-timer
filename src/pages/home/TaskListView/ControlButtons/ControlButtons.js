import React from 'react';
import { NavLink } from 'react-router-dom';
import DeleteButton from './DeleteButton/DeleteButton';
import DownloadButton from './DownloadButton/DownloadButton';
import styles from './ControlButtons.module.css';

const ControlButtons = () => (
    <>
      <DeleteButton />
      <DownloadButton />
      <NavLink to={'/task/-1'} className={styles.buttonAdd} data-test-id="btn-new">
        <span className="glyphicon glyphicon-plus mr-5px" />
        New Task
      </NavLink >
    </>
  );

export default ControlButtons;
