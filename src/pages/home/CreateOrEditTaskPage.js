import React, { useState } from 'react';
import cn from 'classnames';
import { useSetCurrentLocation } from 'hooks';
import TagContextProvider from './TaskForm/contexts/TagContext';
import TimeContextProvider from './TaskForm/contexts/TimeContext';
import AddTaskForm from './TaskForm/form/AddTaskForm';
import TaskListView from './TaskListView/TaskListView';
import ControlButtons from './TaskListView/ControlButtons/ControlButtons';
import useFetchAllTasks from './TaskListView/useFetchAllTasks';
import styles from './CreateOrEditTaskPage.module.css';

const CreateOrEditTaskPage = ({ match }) => {
  const taskId = match?.params?.id;
  useSetCurrentLocation(`/task/${taskId}`);
  const [tasks, setTasks] = useState([]);
  useFetchAllTasks(setTasks);

  return (
    <TagContextProvider>
      <TimeContextProvider>
        <div className={styles.container}>
          <div className={styles.navBarInnerContainer}>
            <ControlButtons tasks={tasks} />
          </div>
          <div className={styles.mainInnerContainer}>
            <TaskListView taskId={taskId} tasks={tasks}
              className={cn(styles.listView, { [styles.listViewAndTask]: taskId })} />
            {taskId !== undefined
              ? <AddTaskForm taskId={taskId} className={styles.form} />
              : <div className={styles.form}></div>}

          </div>
        </div>
      </TimeContextProvider>
    </TagContextProvider>
  );
};

export default CreateOrEditTaskPage;
