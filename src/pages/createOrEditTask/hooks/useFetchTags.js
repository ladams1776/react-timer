import { useEffect } from 'react';
import { fetchApiData } from 'utils';
import useTagContext from './useTagContext';

const useFetchTags = () => {
    const { setAllTags } = useTagContext();

    useEffect(() => {
        fetchApiData('tags', {}, setAllTags);
    }, [setAllTags]);
};

export default useFetchTags;