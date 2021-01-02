import { useMemo } from 'react';
import { selectNormalizer } from 'utils';

const useTagTransformer = (tags) => {
    return useMemo(() => selectNormalizer(tags), [tags]);
}

export default useTagTransformer;