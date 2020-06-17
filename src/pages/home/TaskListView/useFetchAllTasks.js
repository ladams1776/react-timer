import { useEffect } from 'react';
import { fetchApiData } from 'utils';
import { useLoadinSpinnerContext } from 'hooks';

const useFetchAllTasks = setTasks => {
  const { setIsLoadin } = useLoadinSpinnerContext();

  return useEffect(() => {
    setIsLoadin(true);
    fetchApiData('tasks', {}, setTasks);
    setIsLoadin(false);
  }, [setTasks, setIsLoadin]);
};

export default useFetchAllTasks;
