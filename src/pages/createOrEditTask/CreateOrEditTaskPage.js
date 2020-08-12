import React, { useState } from 'react';
import TagContextProvider from './contexts/TagContext';
import TimeContextProvider from './contexts/TimeContext';
import AddTaskForm from './form/AddTaskForm';
import TaskListView from '../home/TaskListView/TaskListView';
import ControlButtons from '../home/TaskListView/ControlButtons/ControlButtons';
import useFetchAllTasks from '../home/TaskListView/useFetchAllTasks';
import styles from './CreateOrEditTaskPage.module.css';

const CreateOrEditTaskPage = ({ match }) => {
  const taskId = match?.params?.id;
  const [tasks, setTasks] = useState([]);
  useFetchAllTasks(setTasks);

  return (
    <TagContextProvider>
      <TimeContextProvider>
        <div className={styles.container}>
          {/* Need to make a leftInnerContainer */}
          <div className={styles.navBar}>
            <ControlButtons tasks={tasks} />
          </div>
          <div className={styles.rightInnerContainer}>
            <TaskListView className={styles.listView} taskId={taskId} tasks={tasks} />
            <AddTaskForm taskId={taskId} className={styles.form} />
          </div>
        </div>
      </TimeContextProvider>
    </TagContextProvider>
  );
};

export default CreateOrEditTaskPage;
