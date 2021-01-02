import { useEffect } from 'react';
import { useFlashMessageFetchApiData } from 'utils';
import useTagContext from './useTagContext';

const useFetchTags = () => {
    const { setAllTags } = useTagContext();
    const fetchApiData = useFlashMessageFetchApiData('tags', {}, setAllTags, '', 'Failed to get Tags');
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    return useEffect(() => fetchApiData(), []);
};

export default useFetchTags;