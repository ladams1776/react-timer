import { useEffect } from 'react';
import { useFlashMessageFetchApiData } from 'utils';

const useFetchTagById = (tagId, setTag) => {
  const fetchApiData = useFlashMessageFetchApiData(`tag/${tagId}`, {}, setTag, '', 'Failed to get Tags');

  useEffect(() => {
    (tagId === -1 || tagId === "-1") && setTag({ _id: tagId });
    (tagId !== "-1" && tagId !== -1) && fetchApiData();
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [tagId]);
};
export default useFetchTagById;