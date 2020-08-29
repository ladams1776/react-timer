import React from 'react';
import { useSetCurrentLocation } from 'hooks';
import Task from './Task/Task';

import styles from './TaskListView.module.css';

const TaskListView = ({ className, taskId, tasks }) => {
  useSetCurrentLocation('/');

  return (
    <div className={className} data-test-id="list-view">
      <ul className={styles.taskList}>
        {tasks.map(task => (
          <li key={task._id} className={styles.task}>
            <Task {...task} key={task._id} selectedId={taskId} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskListView;