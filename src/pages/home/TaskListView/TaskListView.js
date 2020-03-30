import React, { useEffect, useCallback } from 'react';
import { useTaskEditContext } from 'hooks';
import './TaskListView.css';
import Task from './Task/Task';
import ControlButtons from './ControlButtons';

//@TODO: Need test for this component.
const TaskListView = () => {
  const { tasks, updateTasks } = useTaskEditContext();
  const updateTasksCallback = useCallback(data => updateTasks(data), [updateTasks]);

  useEffect(() => {
    fetch(`/api/tasks`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.length >= 1) {
          updateTasksCallback(data);
        }
      })
      .catch(e => { }); //@TODO: Flash the error
  }, [updateTasksCallback]);

  return (
    <div>
      <div className="task-list__header">
        <ControlButtons />
      </div>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task._id} className="task">
            <Task task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskListView;
