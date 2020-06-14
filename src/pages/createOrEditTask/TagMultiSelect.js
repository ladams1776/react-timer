import React from 'react';
import PropType from 'prop-types';
import { MultiSelectAdapter } from 'components';
import { useTagContext, useTagTransformer } from './hooks';

const TagMultiSelect = ({ tags, ...rest }) => {
  const { allTags } = useTagContext();
  const transformedTags = useTagTransformer(allTags);
  const initialTags = useTagTransformer(tags);

  return (
    <MultiSelectAdapter
      data-test-id="tag-multi-select"
      {...rest}
      name="tags"
      options={transformedTags}
      value={initialTags}
    />
  );
};

TagMultiSelect.PropType = {
  tags: PropType.array,
};

export default TagMultiSelect;
