import React from 'react';
import EditTaskForm from './newForm/EditTaskForm';
import AddTaskForm from './newForm/AddTaskForm';

const CreateOrEditTaskPage = ({ match }) => {
    const taskId = match?.params?.id;

    if (taskId && taskId !== "-1") {
        return <EditTaskForm taskId={taskId} />
    } else {
        return <AddTaskForm />
    }


};

export default CreateOrEditTaskPage;
