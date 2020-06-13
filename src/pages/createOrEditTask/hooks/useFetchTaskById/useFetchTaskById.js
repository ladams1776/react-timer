import { useEffect } from 'react';
import { fetchApiData } from 'utils';
import useTimeContext from '../useTimeContext';
import { useLoadinSpinnerContext } from 'hooks';

const useFetchTaskById = (taskId, dispatch) => {
  const { setTime } = useTimeContext();
  const { setIsLoadin } = useLoadinSpinnerContext();

  //@TODO: Not even testing this hydration. I suppose I could, but I want to move on.
  const taskDispatch = data => {
    const formData = {
      id: data._id,
      project: data.contractId,
      tags: data.tags,
      description: data.description,
      time: data.time,
    };
    setIsLoadin(false);
    setTime(data.time);
    return dispatch(formData);
  };

  return useEffect(() => {
    setIsLoadin(true);

    if (taskId !== '-1') {
      fetchApiData(`task/${taskId}`, {}, taskDispatch);
    } else {
      taskDispatch({ time: 0 });
    }
  }, [taskId, dispatch, setIsLoadin]);
};

export default useFetchTaskById;
