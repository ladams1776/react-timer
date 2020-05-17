import React, { useEffect } from 'react';
import { useTaskEditContext, useLoadinSpinnerContext, useFlashMessageContext } from 'hooks';
import './TaskListView.css';
import Task from './Task/Task';
import ControlButtons from './ControlButtons/ControlButtons';

//@TODO: Need test for this component. It is just so much in flush atm
//@TODO: ### Clen up this useEffect: https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper
const TaskListView = () => {
  const { tasks, updateTasks } = useTaskEditContext();
  const { setIsLoadin } = useLoadinSpinnerContext();
  const { setErrorFlashMessage } = useFlashMessageContext();

  useEffect(() => {
    setIsLoadin(true);

    (async () => {
      try {
        const result = await fetch(`/api/tasks`);
        const data = await result.json();
        updateTasks(data);
      } catch (err) {
        setErrorFlashMessage('Issue with fetching data from server');
      } finally {
        setIsLoadin(false);
      }
    })()

  }, [updateTasks, setIsLoadin, setErrorFlashMessage]);

  return (
    <div>
      <div className="task-list__header">
        <ControlButtons />
      </div>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task._id} className="task">
            <Task {...task} key={task._id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskListView;
