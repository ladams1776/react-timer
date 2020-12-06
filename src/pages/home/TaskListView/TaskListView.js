import React, { useEffect } from 'react';
import cn from 'classnames';
import Task from './Task/Task';
import PropTypes from 'prop-types';
import useTaskEditContext from '../hooks/useTaskEditContext';
import styles from './TaskListView.module.css';
import useSmoothScrolling from './hooks/useSmoothScrolling';

const TaskListView = ({ className, tasks, setTasks, refs }) => {
  const { state } = useTaskEditContext();
  const {id, description} = state; 

  useSmoothScrolling(refs, id, description);

  return <div className={cn(
    className,
    styles.task,
    { [styles.listViewAndTask]: id })}
    data-test-id="list-view">
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
  references: PropTypes.arrayOf(Object),
}

export default TaskListView;