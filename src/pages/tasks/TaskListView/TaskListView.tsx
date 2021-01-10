import React from 'react';
import cn from 'classnames';
import { TaskInterface } from 'interfaces/pages/tasks/Task';
import useTaskByIdSelector from 'redux/selectors/useTaskByIdSelector';
import useSmoothScrolling from './hooks/useSmoothScrolling';
import styles from './TaskListView.module.css';
import Task from './Task/Task';

interface TaskListViewProp {
  className: string;
  tasks: TaskInterface[];
  setTasks: (tasks: TaskInterface[]) => void;
  refs: any;
}

const TaskListView: React.FC<TaskListViewProp> = ({ className, tasks, setTasks, refs }) => {
  const task = useTaskByIdSelector();
  const { id, description } = task;

  useSmoothScrolling(refs, id, description);

  return (
    <div className={cn(className, styles.task, { [styles.listViewAndTask]: id })} data-testid="list-view">
      <ul className={styles.taskList}>
        {tasks.map((task: TaskInterface) => {
          const desc = task._id === id ? description : task.description;
          const ref = refs[task._id];
          return (
            <li key={task._id} className={cn(styles.task)} ref={ref}>
              <Task key={task._id} contractId={task.projectId} {...task} description={desc} selectedId={id} setTasks={setTasks} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskListView;
