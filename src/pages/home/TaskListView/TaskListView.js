import React, { useEffect } from 'react';
import { useTaskEditContext } from 'hooks';
import './TaskListView.css';
import Task from './Task/Task';
import ControlButtons from './ControlButtons';

//@TODO: Need test for this component.
const TaskListView = () => {
  const { tasks, updateTasks } = useTaskEditContext();

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
      .catch(e => { }); //@TODO: Flash the error
  }, []);

  return (
    <div>
      <ControlButtons />
      <ul className="task-list">
        {tasks.map(task =>
          (
            <li key={task._id} className="task">
              <Task task={task} />
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default TaskListView;
