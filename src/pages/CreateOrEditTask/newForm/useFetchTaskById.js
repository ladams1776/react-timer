import { useEffect, useState } from 'react';

function useFetchTaskById(taskId) {
    const { task, setTask } = useState({});

    useEffect(() => {

        function handleTaskChange(task) {
            setTask(task);
        }

        // setIsLoading(true);
        if (taskId !== -1) {
            fetch("/api/task/" + taskId)
                .then(response => {
                    return response.json();
                })
                .then(task => { handleTaskChange(task) })
                .catch(error => {
                    //@TODO: Could add some sort of flag to change oclor to red.
                    // setMessage(`Error: ${error}`);
                })
        } else {
            handleTaskChange({ description: '', _id: -1, time: 0, project: 0 });
        }
    }, [taskId]);

    return task;
};

export default useFetchTaskById