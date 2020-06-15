import React from 'react';
import EditTaskForm from './form/EditTaskForm';
import TagContextProvider from './contexts/TagContext';
import TimeContextProvider from './contexts/TimeContext';
import AddTaskForm from './form/AddTaskForm';

const CreateOrEditTaskPage = ({ match }) => {
  const taskId = match?.params?.id;

  return (
    <TagContextProvider>
      <TimeContextProvider>
        <AddTaskForm taskId={taskId} />
      </TimeContextProvider>
    </TagContextProvider>
  );
};

export default CreateOrEditTaskPage;
