import { useEffect, useCallback } from 'react';
import { fetchApiData } from 'utils';
import useTimeContext from '../useTimeContext';
import { useLoadinSpinnerContext } from 'hooks';

//@TODO: Model this after useFetchTagById
const useFetchTaskById = (taskId, dispatch) => {
  const { setTime } = useTimeContext();
  const { setIsLoadin } = useLoadinSpinnerContext();

  //@TODO: Not even testing this hydration. I suppose I could, but I want to move on.
  const taskDispatch = useCallback(
    data => {
      const formData = {
        id: data._id,
        project: data.contractId,
        tags: data.tags,
        description: data.description,
        time: data.time,
        dateTimes: data.dateTimes,
      };
      setIsLoadin(false);
      setTime(data.time);
      return dispatch(formData);
    },
    [setIsLoadin, setTime, dispatch],
  );

  return useEffect(() => {
    setIsLoadin(true);

    if (taskId !== '-1') {
      fetchApiData(`task/${taskId}`, {}, taskDispatch);
    } else {
      taskDispatch({ time: 0 });
    }
  }, [taskId, dispatch, setIsLoadin, taskDispatch]);
};

export default useFetchTaskById;
