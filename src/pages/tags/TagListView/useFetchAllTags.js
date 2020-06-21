import { useEffect } from 'react';
import { fetchApiData } from 'utils';

const useFetchAllTags = setTags => {
  return useEffect(() => fetchApiData('tags', {}, setTags), [setTags]);
};
export default useFetchAllTags;
