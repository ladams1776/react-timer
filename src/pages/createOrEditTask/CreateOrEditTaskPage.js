import React from 'react';
import EditTaskForm from './form/EditTaskForm';
import TagContextProvider from './contexts/TagContext';

const CreateOrEditTaskPage = ({ match }) => {
  const taskId = match?.params?.id;

  return (<TagContextProvider>
    <EditTaskForm taskId={taskId} />
  </TagContextProvider>)
};

export default CreateOrEditTaskPage;
