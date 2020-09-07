import React from 'react';
import cn from 'classnames';
import Task from './Task/Task';
import styles from './TaskListView.module.css';
import useTaskEditContext from '../hooks/useTaskEditContext';

const TaskListView = ({ className, taskId, tasks, setTasks }) => {
  const { state } = useTaskEditContext();
  return <div className={cn(
    className,
    styles.task,
    { [styles.listViewAndTask]: taskId })}
    data-test-id="list-view">
    <ul className={styles.taskList}>
      {tasks.map(task => {
        const desc = (task._id === state.id) ? state.description : task.description;
        return (
          <li key={task._id} className={cn(styles.task)}>
            <Task key={task._id}
              {...task}
              description={desc}
              selectedId={taskId}
              setTasks={setTasks} />
          </li>
        )
      })}
    </ul>
  </div >
};

export default TaskListView;