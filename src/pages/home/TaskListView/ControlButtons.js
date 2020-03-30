// @TODO: Left off here moving the 3 buttons from TaskListView over into this component
// @TODO: Then we want to control when to display the other 2 buttons
// @TODO: Based on if there are any tasks. So we might be pushing Tasks into the context as well and
// @TODO: Creating a new context or adding to the existing one.
import React from 'react';
import { NavLink } from 'react-router-dom';
import { writeJsonFile } from './writeJsonFile';
import formatTimeContractAndCustomer from './formatTimeContractAndCustomer';
import useTaskEditContext from 'hooks/useTaskEditContext';
import { getFormattedDate } from 'utils';
import styles from './ControlButtons.module.css';

const ControlButtons = () => {
  const { setMessage, projects, tasks, updateTasks } = useTaskEditContext();

  const handleDownload = () => {
    const dateFormatted = getFormattedDate(new Date());

    const timeTask = {
      date: dateFormatted
    };

    timeTask.WorkUnit = tasks.map(task =>
      formatTimeContractAndCustomer(task, projects)
    );

    writeJsonFile(timeTask);
  };

  /**
   * Setting a timeout when reloading, because I think the reloading is happening too fast.
   */
  const handleDelete = async e => {
    e.preventDefault();
    await fetch(`/api/tasks`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(
        setTimeout(() => {
          updateTasks([]);
          setMessage('Successfully deleted all tasks');
        }, 500)
      );
  };

  return (
    <>
      {!tasks?.length || (
        <button
          type="a"
          className={styles.buttonDelete}
          onClick={handleDelete}
          data-test-id="btn-delete"
        >
          <span className="glyphicon glyphicon-remove mr-5px"></span>
          Delete
        </button>
      )}
      {!tasks?.length || (
        <button
          type="a"
          className={styles.buttonDownload}
          onClick={handleDownload}
          data-test-id="btn-download"
        >
          <span className="glyphicon glyphicon-download-alt mr-5px"></span>
          Download
        </button>
      )
      }
      <NavLink to={'/task/-1'} className={styles.buttonAdd} data-test-id="btn-new">
        <span className="glyphicon glyphicon- plus mr-5px" />
        New Task
    </NavLink >
    </>
  );
};

export default ControlButtons;
