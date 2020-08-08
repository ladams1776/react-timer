import React from 'react';
import TagContextProvider from './contexts/TagContext';
import TimeContextProvider from './contexts/TimeContext';
import AddTaskForm from './form/AddTaskForm';
import TaskListView from '../home/TaskListView/TaskListView';
import styles from './CreateOrEditTaskPage.module.css';

const CreateOrEditTaskPage = ({ match }) => {
  const taskId = match?.params?.id;

  return (
    <TagContextProvider>
      <TimeContextProvider>
        <div className={styles.container}>
          <TaskListView className={styles.listView} taskId={taskId} />
          <AddTaskForm taskId={taskId} className={styles.form} />
        </div>
      </TimeContextProvider>
    </TagContextProvider>
  );
};

export default CreateOrEditTaskPage;
