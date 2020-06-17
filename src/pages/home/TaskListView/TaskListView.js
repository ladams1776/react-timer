import React, { useState } from 'react';
import { useSetCurrentLocation } from 'hooks';
import Task from './Task/Task';
import ControlButtons from './ControlButtons/ControlButtons';
import useFetchAllTasks from './useFetchAllTasks';
import './TaskListView.css';

const TaskListView = () => {
  useSetCurrentLocation('/');
  const [tasks, setTasks] = useState([]);
  useFetchAllTasks(setTasks);

  return (
    <div data-test-id="list-view">
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