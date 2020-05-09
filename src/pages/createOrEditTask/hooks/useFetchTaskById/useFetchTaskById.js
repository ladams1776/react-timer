import { useEffect } from 'react';
import { fetchApiData } from 'utils';
import { useLoadinSpinnerContext } from 'hooks';

const useFetchTaskById = (taskId, dispatch) => {
  const { setIsLoadin } = useLoadinSpinnerContext();

  return useEffect(() => {
    setIsLoadin(true);

    if (taskId !== "-1") {
      fetchApiData(`task/${taskId}`, {}, dispatch);
    } else {
      dispatch({ time: 0 })
    }

    setIsLoadin(false);
  }, [taskId, dispatch, setIsLoadin]);
};

export default useFetchTaskById;
