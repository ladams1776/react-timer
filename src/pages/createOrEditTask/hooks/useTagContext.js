import { useContext } from 'react';
import { TagContext, TagActionContext } from '../contexts/TagContext';

const useTags = () => useContext(TagContext);
const useSetTags = () => useContext(TagActionContext);

const useTagContext = () => {
    const tags = useTags();
    const setTags = useSetTags();
    return { tags, setTags };
};

export default useTagContext;