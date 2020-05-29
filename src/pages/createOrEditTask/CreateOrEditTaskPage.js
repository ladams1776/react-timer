import React from 'react';
import EditTaskForm from './form/EditTaskForm';
import TagContextProvider from './contexts/TagContext';
import TimeContextProvider from './contexts/TimeContext';

const CreateOrEditTaskPage = ({ match }) => {
  const taskId = match?.params?.id;

  return (
    <TagContextProvider>
      <TimeContextProvider>
        <EditTaskForm taskId={taskId} />
      </TimeContextProvider>
    </TagContextProvider>
  );
};

export default CreateOrEditTaskPage;
