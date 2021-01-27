import { TagInterface } from 'interfaces/pages/tags/Tag';
import { useSelector } from 'react-redux';

interface State {
  tags: {
    tagById: TagInterface[];
  };
}

const useTagByIdSelector = (): TagInterface | {} => {
  return useSelector((state: State) => {
    return state?.tags?.tagById || {};
  });
};

export default useTagByIdSelector;
