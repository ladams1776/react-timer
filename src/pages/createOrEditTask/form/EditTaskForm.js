import React, { useState, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import {
  useTaskEditContext,
  useBackButtonListener,
  useFetchTaskById,
  useFlashMessageContext
} from 'hooks';
import getFormattedDate from 'utils/getFormattedDate';
import ProjectDropDown from '../projectDropdown/ProjectDropdown';
import Timer from '../timer/Timer';
import styles from './TaskForm.module.css';

const EditTaskForm = ({ taskId, history }) => {
  useBackButtonListener(history);
  const { task } = useTaskEditContext();
  const { setSuccessFlashMessage, setErrorFlashMessage } = useFlashMessageContext();
  const [time, setTime] = useState(0);
  const setTimeCallback = useCallback((time) => setTime(time), [setTime]);
  useFetchTaskById(taskId, setTimeCallback);

  //@TODO: Use the new flashMessage, not this old one. It does not work


  /**
   * These really can live in the Timer comp, but to be able to Unit test the Timer
   * and not try to figure out how to mock what useState returns... this seems to be
   * an easy compromise. Or at least a late night, tired one.
   */
  const [isActive, setIsActive] = useState(false);

  const onSubmit = event => {
    const date = new Date();
    const dateFormatted = getFormattedDate(date);

    const timeTask = {
      date: dateFormatted,
      WorkUnit: [
        {
          time,
          contractId: event?.selectedProject || 0,
          description: event?.description || '',
        },
      ],
    };

    timeTask._id = task._id;

    fetch('/api/task', {
      method: 'PUT',
      body: JSON.stringify(timeTask),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(e => {
        if (e.status === 200) {
          setSuccessFlashMessage('Successfully created/updated a Task');
        }
      })
      .catch(error => setErrorFlashMessage(error));
  };

  return (
    <Form
      initialValues={{
        description: task.description,
        selectedProject: task.contractId,
      }}
      onSubmit={onSubmit}
      render={({ handleSubmit, pristine }) => (
        <div className={styles.taskFormContainer}>
          <div className={styles.form}>
            <form className={styles.taskForm} onSubmit={handleSubmit}>
              <Timer
                time={time}
                setTime={setTimeCallback}
                isActive={isActive}
                setIsActive={setIsActive}
              >
                <ProjectDropDown />
              </Timer>
              <div className={styles.textArea}>
                <Field
                  name="description"
                  component="textarea"
                  cols="80"
                  rows="10"
                />
              </div>

              <button type="submit" className={styles.submit} disabled={pristine}>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    />
  );
};

//@TODO: Replace this with the pipeline operator.
export default withRouter(EditTaskForm);
