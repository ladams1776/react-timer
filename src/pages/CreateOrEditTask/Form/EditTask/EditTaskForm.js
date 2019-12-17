import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import ReactLoading from 'react-loading';
import getFormattedDate from 'utils/getFormattedDate';
import DropDown from './DropDown/DropDown';
import Timer from './Timer/Timer';
import TextArea from './TextArea/TextArea';
import useTaskEditContext from './hooks/useTaskEditContext';
import './EditTaskForm.css';

//@TODO: Need to test this
//@TODO: Split the form into 2 forms (Edit and New)
const EditTaskForm = ({ match }) => {
  const {
    time,
    updateTime,
    setMessage,
    description,
    updateDescription,
    selectedProject,
    updateDropDown,
    projects
  } = useTaskEditContext();

  const [isLoading, setIsLoading] = useState(true);

  const taskId = match.params.id;

  //@TODO: Handle if there is a bad response.
  useEffect(() => {
    setIsLoading(true);

    if (taskId !== '-1') {
      fetch('/api/task/' + taskId)
        .then(response => {
          return response.json();
        })
        .then(task => {
          updateDescription(task.description);
          updateTime(task.time);
          updateDropDown(task.contractId);
          setIsLoading(false);
        });
    } else {
      updateDescription('');
      updateTime(0);
      updateDropDown(0);
      setIsLoading(false);
    }
  }, []);

  const handleSubmit = event => {
    event.preventDefault();

    const dropDownSelection = projects[selectedProject];

    const date = new Date();
    const dateFormatted = getFormattedDate(date);

    const timeTask = {
      date: dateFormatted,
      WorkUnit: [
        {
          time: time,
          contractId: dropDownSelection.key,
          description: description
        }
      ]
    };

    timeTask._id = taskId !== -1 ? taskId : null;

    fetch('/api/task', {
      method: 'POST',
      body: JSON.stringify(timeTask),
      headers: { 'Content-Type': 'application/json' }
    }).then(e => {
      if (e.status === 200) {
        setMessage('Successfully created/updated a Task');
        setIsLoading(false);
      }
    });
  };

  return (
    <div className="m-a mt-50px w-500px">
      {!isLoading || (
        <div className="react-loading">
          <div className="react-loading__content">
            <ReactLoading type="bars" color="#000" />
          </div>
        </div>
      )}

      {!isLoading && (
        <form onSubmit={handleSubmit}>
          <TextArea />
          <DropDown />
          <Timer taskId={taskId} />
          <input
            className="form-submit f-r mt-4em"
            type="submit"
            value="Submit"
          />
        </form>
      )}
    </div>
  );
};

EditTaskForm.PropType = {
  match: PropType.object.isRequired,
  time: PropType.number.isRequired,
  updateTime: PropType.func.isRequired,
  updateFlashMessage: PropType.func.isRequired,
  description: PropType.string.isRequired,
  updateDescription: PropType.func.isRequired,
  selectedProject: PropType.number.isRequired,
  updateDropDown: PropType.func.isRequired,
  projects: PropType.array.isRequired
};

export default EditTaskForm;