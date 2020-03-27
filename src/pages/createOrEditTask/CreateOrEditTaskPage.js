import React, { useState } from 'react';
import EditTaskForm from './form/EditTaskForm';
import AddTaskForm from './form/AddTaskForm';
import MinAddTaskForm from './form/MinAddTaskForm';

const CreateOrEditTaskPage = ({ match }) => {
  const [isMinimized, setIsMinimized] = useState(true);
  const taskId = match?.params?.id;

  if (taskId && taskId !== '-1') {
    return <EditTaskForm taskId={taskId} />;
  } else {
    if (isMinimized) {
      return <MinAddTaskForm setIsMinimized={setIsMinimized} />
    } else {
      return <AddTaskForm setIsMinimized={setIsMinimized} />;
    }
  }
};

export default CreateOrEditTaskPage;
