import React, { useEffect, useCallback } from 'react';
import { useTaskEditContext, useLoadinSpinnerContext, useFlashMessageContext } from 'hooks';
import './TaskListView.css';
import Task from './Task/Task';
import ControlButtons from './ControlButtons';

//@TODO: Need test for this component. It is just so much in flush atm
const TaskListView = () => {
  const { tasks, updateTasks } = useTaskEditContext();
  const { setIsLoadin } = useLoadinSpinnerContext();
  const { setErrorFlashMessage } = useFlashMessageContext();
  const updateTasksCallback = useCallback(data => updateTasks(data), [updateTasks]);
  
  useEffect(() => {
    setIsLoadin(true);
    setErrorFlashMessage('Issue with fetching data from server');

    (async () => {
      try {
        const result = await fetch(`/api/tasks`);
        const data = await result.json();
      } catch (err) {
        setErrorFlashMessage('Issue with fetching data from server');
      } finally {
        setIsLoadin(false);
      }
    })()

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
