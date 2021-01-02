import { useEffect } from 'react';
import { useFlashMessageFetchApiData } from 'utils';

const useFetchTaskById = (taskId, dispatch) => {
  const dateTimeDispatch = task => {
    return dispatch(task.dateTimes);
  }
  const fetchApiData = useFlashMessageFetchApiData(`task/${taskId}`, {}, dateTimeDispatch, '', 'Failed to get date time for task');

  return useEffect(() => {
    (taskId === -1 || taskId === "-1") && dispatch([]);
    (taskId !== "-1" && taskId !== -1) && fetchApiData()
  }, [taskId]);
};

export default useFetchTaskById;
