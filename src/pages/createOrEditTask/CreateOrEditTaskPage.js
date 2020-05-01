import React from 'react';
import EditTaskForm from './form/EditTaskForm';
import AddTaskForm from './form/AddTaskForm';
import TagContextProvider from './contexts/TagContext';

const CreateOrEditTaskPage = ({ match }) => {
  const taskId = match?.params?.id;

  return (<TagContextProvider>
    {(taskId && taskId !== '-1')
      ? <EditTaskForm taskId={taskId} />
      : <AddTaskForm />}
  </TagContextProvider>)
};

export default CreateOrEditTaskPage;
