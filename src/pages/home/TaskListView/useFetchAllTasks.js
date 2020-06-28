import { useEffect } from 'react';
import { fetchApiData } from 'utils';
import { useLoadinSpinnerContext } from 'hooks';

//@TODO: Model this after useFetchAllTags
const useFetchAllTasks = setTasks => {
  const { setIsLoadin } = useLoadinSpinnerContext();

  return useEffect(() => {
    setIsLoadin(true);
    fetchApiData('tasks', {}, setTasks);
    setIsLoadin(false);
  }, [setTasks, setIsLoadin]);
};

export default useFetchAllTasks;
