import { useEffect } from 'react';
import { useTaskEditContext } from 'hooks';
import { useLoadinSpinnerContext } from 'hooks';

const useFetchTaskById = (taskId, setTime) => {
  const { updateTask } = useTaskEditContext();
  const { setIsLoadin } = useLoadinSpinnerContext();

  return useEffect(() => {
    setIsLoadin(true);
    (async () => {
      const result = await fetch(`/api/task/${taskId}`);
      const task = await result.json();
      setTime(task.time);
      updateTask(task);
    })();
    setIsLoadin(false);

  }, [taskId, setTime, updateTask]);
};

export default useFetchTaskById;
