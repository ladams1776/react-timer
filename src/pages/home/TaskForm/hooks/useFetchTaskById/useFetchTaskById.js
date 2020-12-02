import { useEffect } from 'react';
import useTimeContext from '../useTimeContext';
import { useFlashMessageFetchApiData } from 'utils';
import useDispatch from './useDispatch';

//@TODO: Model this after useFetchTagById
const useFetchTaskById = (taskId, dispatchTask) => {
  const { setTime } = useTimeContext();
  const taskDispatch = useDispatch(setTime, dispatchTask);
  const fetchApiData = useFlashMessageFetchApiData(`task/${taskId}`, {}, taskDispatch, '', 'Failed to get Task');

  return useEffect(() => {
    (taskId === -1 || taskId === "-1") && taskDispatch({ time: 0 });
    (taskId !== "-1" && taskId !== -1) && fetchApiData()
  }, [taskId]);
};

export default useFetchTaskById;
