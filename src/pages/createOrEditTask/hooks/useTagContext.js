import { useContext } from 'react';
import { TagContext, TagActionContext } from '../contexts/TagContext';

const useTags = () => useContext(TagContext);
const useSetTags = () => useContext(TagActionContext);

const useTagContext = () => {
    const allTags = useTags();
    const setAllTags = useSetTags();
    return { allTags, setAllTags };
};

export default useTagContext;