import React from 'react';
import cn from 'classnames';
import { useSetCurrentLocation } from 'hooks';
import Task from './Task/Task';
import styles from './TaskListView.module.css';

const TaskListView = ({ className, taskId, tasks }) => {
  useSetCurrentLocation('/');

  return <div className={cn(
    className,
    styles.task,
    { [styles.listViewAndTask]: taskId })}
    data-test-id="list-view">
    <ul className={styles.taskList}>
      {tasks.map(task => (
        <li key={task._id} className={cn(styles.task)}>
          <Task {...task} key={task._id} selectedId={taskId} />
        </li>
      ))}
    </ul>
  </div >
};

export default TaskListView;