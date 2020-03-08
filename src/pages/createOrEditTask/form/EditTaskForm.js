import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import {
  useTaskEditContext,
  useBackButtonListener,
  useFetchTaskById,
} from 'hooks';
import getFormattedDate from 'utils/getFormattedDate';
import ProjectDropDown from '../projectDropdown/ProjectDropdown';
import Timer from '../timer/Timer';

const EditTaskForm = ({ taskId, history }) => {
  useBackButtonListener(history);
  const [time, setTime] = useState(0);
  useFetchTaskById(taskId, setTime);
  const { setMessage, task } = useTaskEditContext();
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
          setMessage('Successfully created/updated a Task');
        }
      })
      .catch(error => console.log(error, 'Error!'));
  };

  return (
    <Form
      initialValues={{
        description: task.description,
        selectedProject: task.contractId,
      }}
      onSubmit={onSubmit}
      render={({ handleSubmit, pristine }) => (
        <div className="taskFormContainer">
          <div class="form">
            <form className="taskForm" onSubmit={handleSubmit}>
              <Timer
                time={time}
                setTime={setTime}
                isActive={isActive}
                setIsActive={setIsActive}
              >
                <ProjectDropDown />
              </Timer>
              <div className="textArea">
                <Field
                  name="description"
                  component="textarea"
                  cols="80"
                  rows="10"
                />
              </div>

              <button type="submit" className="submit" disabled={pristine}>
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
