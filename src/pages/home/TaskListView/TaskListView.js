import React, { useState } from 'react';
import { useSetCurrentLocation } from 'hooks';
import Task from './Task/Task';
import ControlButtons from './ControlButtons/ControlButtons';
import useFetchAllTasks from './useFetchAllTasks';
import './TaskListView.css';

const TaskListView = ({ className, taskId }) => {
  useSetCurrentLocation('/');
  const [tasks, setTasks] = useState([]);
  useFetchAllTasks(setTasks);

  return (
    <div className={className} data-test-id="list-view">
      <div className="task-list__header">
        <ControlButtons tasks={tasks} />
      </div>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task._id} className="task">
            <Task {...task} key={task._id} selectedId={taskId} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskListView;