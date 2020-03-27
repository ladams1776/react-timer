import React, { useState, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { useTaskEditContext } from 'hooks';
import { getFormattedDate } from 'utils';
import ProjectDropDown from '../projectDropdown/ProjectDropdown';
import MinTimer from '../timer/MinTimer';
import './MinTaskForm.scss';


//@TODO: Going to restyle this.
const MinAddTaskForm = ({ history }) => {
  const { setMessage, task } = useTaskEditContext();
  const [time, setTime] = useState(0);
  const setTimeCallback = useCallback((time) => setTime(time), [setTime]);
  /**
   * These really can live in the MinTimer comp, but to be able to Unit test the MinTimer
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
          contractId: event?.projects || 0,
          description: event?.description || '',
        },
      ],
    };

    timeTask._id = task?._id || '-1';

    fetch('/api/task', {
      method: 'POST',
      body: JSON.stringify(timeTask),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => {
        if (res.status === 200) {
          setMessage('Successfully created/updated a Task');
          return res.json();
          // setIsLoading(false);
        }
      })
      .then(data => {
        history.push(`/task/${data._id}`);
      })
      .catch(error => console.log(error, 'Error!'));
  };

  return (
    <Form
      initialValues={{
        description: '',
        projects: 0,
      }}
      onSubmit={onSubmit}
      render={({ handleSubmit, pristine }) => (
        <div className="taskFormContainer">
          <div className="form">
            <form className="taskForm" onSubmit={handleSubmit}>
              <MinTimer
                time={time}
                setTime={setTimeCallback}
                isActive={isActive}
                setIsActive={setIsActive}
              >
                <button type="submit" className="submit" disabled={pristine} />
                <ProjectDropDown />
              </MinTimer>
              <div className="textArea">
                <Field
                  name="description"
                  component="textarea"
                  cols="80"
                  rows="10"
                />

                <div className="glyphicon glyphicon-collapse-down minimizeTextAreaButton" />
              </div>

            </form>
          </div>
        </div>
      )}
    />
  );
};

//@TODO: Come back and use pipeline operator
export default withRouter(MinAddTaskForm);
