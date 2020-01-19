import React from 'react';
import TaskForm from './newForm/TaskForm';
import useFetchTaskById from './newForm/useFetchTaskById';

const CreateOrEditTaskPage = ({ match }) => {
    const taskId = match?.params?.id || "-1"
    useFetchTaskById(taskId);

    return <TaskForm />
};

export default CreateOrEditTaskPage;
