import React, { useEffect } from 'react';
import './TaskListView.css';
import Task from './Task/Task';
import ControlButtons from './ControlButtons';
import useTaskEditContext from '../../Form/EditTask/useTaskEditContext';

//@TODO: Need test for this component.
const TaskListView = () => {
  const { projects, tasks, updateTasks, setMessage } = useTaskEditContext();

  useEffect(() => {
    if (!projects.length) {
      setMessage('Please add Projects to the dropdownDefinition.json file');
    }
  }, [projects, setMessage]);

  useEffect(() => {
    fetch(`/api/tasks`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.length >= 1) {
          updateTasks(data);
        }
      })
      .catch(e => {}); //@TODO: Flash the error
  }, [tasks]);

  return (
    <div>
      <ControlButtons />
      <ul>
        {tasks.map(task => {
          return (
            <div key={task._id}>
              <Task task={task} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskListView;
