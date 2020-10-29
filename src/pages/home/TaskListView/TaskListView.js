import React, { useEffect } from 'react';
import cn from 'classnames';
import Task from './Task/Task';
import PropTypes from 'prop-types';
import useTaskEditContext from '../hooks/useTaskEditContext';
import styles from './TaskListView.module.css';

const TaskListView = ({ className, taskId, tasks, setTasks, refs }) => {
  const { state } = useTaskEditContext();

  useEffect(() => {
    const scroll = () => refs[taskId]?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    
    window.addEventListener('load', scroll);
    return () => {
      window.removeEventListener('load', scroll);
    };
  }, [refs, taskId]);

  return <div className={cn(
    className,
    styles.task,
    { [styles.listViewAndTask]: taskId })}
    data-test-id="list-view">
    <ul className={styles.taskList}>
      {tasks.map(task => {
        const desc = (task._id === state.id) ? state.description : task.description;
        const ref = refs[task._id];
        return (
          <li key={task._id} className={cn(styles.task)} ref={ref}>
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

TaskListView.PropType = {
  className: PropTypes.string,
  taskId: PropTypes.string,
  tasks: PropTypes.arrayOf(Object),
  setTasks: PropTypes.func,
  references: PropTypes.arrayOf(Object),
}

export default TaskListView;