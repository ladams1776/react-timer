import { useEffect } from 'react';
import { fetchApiData } from 'utils';
import useTagContext from './useTagContext';

const useFetchTags = () => {
    const { setTags } = useTagContext();

    useEffect(() => {
        fetchApiData('tags', {}, setTags);
    }, [setTags]);
};

export default useFetchTags;