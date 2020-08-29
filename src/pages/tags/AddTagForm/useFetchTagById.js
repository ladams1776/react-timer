import { useEffect } from 'react';
import { useFlashMessageFetchApiData } from 'utils';

const useFetchTagById = (tagId, setTag) => {
  const fetchApiData = useFlashMessageFetchApiData(`tag/${tagId}`, {}, setTag, '', 'Failed to get Tags');

  /* eslint-disable-next-line react-hooks/exhaustive-deps */
  useEffect(() => {
    (tagId === -1 || tagId === "-1") && setTag({ _id: tagId });
    (tagId !== "-1" && tagId !== -1) && fetchApiData();
  }, [tagId, setTag]);
};
export default useFetchTagById;