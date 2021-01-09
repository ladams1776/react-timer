import React from 'react';
import { MultiSelectAdapter } from 'components';
import { useTagContext, useTagTransformer } from '../hooks';
import styles from './TagMultiSelect.module.css';

interface TagMultiSelectProps {
  tags: any;
  input: any;
}

const TagMultiSelect: React.FC<TagMultiSelectProps> = ({ tags, input, ...rest }) => {
  const { allTags } = useTagContext();
  const transformedTags = useTagTransformer(allTags);
  const initialTags = useTagTransformer(tags);

  return <MultiSelectAdapter 
            className={styles.select} 
            data-test-id="tag-multi-select" 
            name="tags" 
            input={input}
            options={transformedTags} 
            value={initialTags} 
            {...rest} />;
};

export default TagMultiSelect;
