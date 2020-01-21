import { useEffect, useState } from 'react';
import { useTaskEditContext } from 'hooks';

const useFetchTaskById = (taskId) => {
    const { updateTask } = useTaskEditContext();

    return useEffect(() => {
        if (taskId !== "-1") {
            fetch("/api/task/" + taskId)
                .then(response => {
                    return response.json();
                })
                .then(task => updateTask(task))
                .catch(error => {
                    //@TODO: Could add some sort of flag to change oclor to red.
                    // setMessage(`Error: ${error}`);
                    updateTask({});
                })
        }
    }, [taskId, useFetchTaskById]);
};

export default useFetchTaskById