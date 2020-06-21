import { useEffect } from 'react';
import { fetchApiData } from 'utils';

//@TODO: Look at the useFetchAllTasks - we want to get isLoadin to integrate in the fetch process naturally - not have to do this manually everytime.
const useFetchAllTags = setTags => {
  return useEffect(() => {
    fetchApiData('tags', {}, setTags)
  }, [setTags]);
};
export default useFetchAllTags;
