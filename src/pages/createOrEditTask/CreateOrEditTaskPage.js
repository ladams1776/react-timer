import React from 'react';
import EditTaskForm from './form/EditTaskForm';
import AddTaskForm from './form/AddTaskForm';

const CreateOrEditTaskPage = ({ match }) => {
    const taskId = match?.params?.id;

    if (taskId && taskId !== "-1") {
        return <EditTaskForm taskId={taskId} />
    } else {
        return <AddTaskForm />
    }


};

export default CreateOrEditTaskPage;
