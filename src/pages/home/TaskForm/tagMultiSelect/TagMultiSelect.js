import React from 'react';
import PropType from 'prop-types';
import { MultiSelectAdapter } from 'components';
import { useTagContext, useTagTransformer } from '../hooks';
import styles from './TagMultiSelect.module.css';

const TagMultiSelect = ({ tags, ...rest }) => {
  const { allTags } = useTagContext();
  const transformedTags = useTagTransformer(allTags);
  const initialTags = useTagTransformer(tags);
  return (
    <MultiSelectAdapter
      className={styles.select}
      data-test-id="tag-multi-select"
      name="tags"
      options={transformedTags}
      value={initialTags}
      {...rest}
    />
  );
};

TagMultiSelect.PropType = {
  tags: PropType.array,
};

export default TagMultiSelect;
