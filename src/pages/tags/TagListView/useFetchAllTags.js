import { useEffect } from 'react';
import { useFlashMessageFetchApiData } from 'utils';

const useFetchAllTags = setTags => {
  const fetchApiData = useFlashMessageFetchApiData('tags', {}, setTags, '', 'Failed to get Tags');
  /* eslint-disable-next-line react-hooks/exhaustive-deps */
  return useEffect(() => fetchApiData(), []);
};
export default useFetchAllTags;
