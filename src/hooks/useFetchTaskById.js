import { useEffect } from 'react';
import { useTaskEditContext } from 'hooks';

const useFetchTaskById = (taskId, setTime) => {
  const { updateTask } = useTaskEditContext();
  return useEffect(() => {
    if (taskId !== '-1') {
      fetch('/api/task/' + taskId)
        .then(response => {
          console.log('Json about to be returned');
          return response.json();
        })
        .then(task => {
          console.log('json was removed and now we are lookin at tasks', task);
          setTime(task.time);
          updateTask(task);
        })
        .catch(error => {
          //@TODO: Could add some sort of flag to change oclor to red.
          // setMessage(`Error: ${error}`);
          updateTask({});
        });
    }
  }, [taskId, setTime, updateTask]);
};

export default useFetchTaskById;
