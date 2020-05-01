import { useEffect } from 'react';
import { fetchApiData } from 'utils';
import useTagContext from '../hooks/useTagContext';

const useFetchTagOptions = () => {
    const { setTags } = useTagContext();

    useEffect(() => {
        fetchApiData('tags', {}, setTags);
    }, [setTags, fetchApiData]);
};

export default useFetchTagOptions;