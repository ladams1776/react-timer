import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Task from './Task/Task';
import useTaskEditContext from '../hooks/useTaskEditContext';
import useSmoothScrolling from './hooks/useSmoothScrolling';
import styles from './TaskListView.module.css';

const TaskListView = ({ className, tasks, setTasks, refs }) => {
  const { state } = useTaskEditContext();
  const { id, description } = state;

  useSmoothScrolling(refs, id, description);

  return <div className={cn(
    className,
    styles.task,
    { [styles.listViewAndTask]: id })}
    data-testid="list-view">
    <ul className={styles.taskList}>
      {tasks.map(task => {
        const desc = (task._id === id) ? description : task.description;
        const ref = refs[task._id];
        return (
          <li key={task._id} className={cn(styles.task)} ref={ref}>
            <Task key={task._id}
              {...task}
              description={desc}
              selectedId={id}
              setTasks={setTasks} />
          </li>
        )
      })}
    </ul>
  </div >
};

TaskListView.PropType = {
  className: PropTypes.string,
  tasks: PropTypes.arrayOf(Object),
  setTasks: PropTypes.func,
  refs: PropTypes.arrayOf(Object),
}

export default TaskListView;