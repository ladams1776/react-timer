import { useEffect } from 'react';
import { useFlashMessageFetchApiData } from 'utils';

const useFetchTagById = (tagId, setTag) => {
  const fetchApiData = useFlashMessageFetchApiData(`tag/${tagId}`, {}, setTag, '', 'Failed to get Tags');
  const dispatch = fetchApiData();

  /* eslint-disable-next-line react-hooks/exhaustive-deps */
  return useEffect(() => {
    (tagId === "-1") && setTag({ _id: tagId });
    (tagId !== "-1") && dispatch();
  }, [setTag, tagId]);
};
export default useFetchTagById;