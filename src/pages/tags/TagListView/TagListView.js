import React from 'react';
import Tag from './Tag/Tag';
import styles from './TagListView.module.css';

const TagsListView = ({ className, tagId, tags }) => {
  return (
    <div className={className} data-test-id="list-view">
      <ul className={styles.tagList}>
        {tags.map(tag => (
          <li key={tag._id} className="task">
            <Tag {...tag} key={tag._id} selectedId={tagId} />
          </li>
        ))}
      </ul>
    </div >
  );
};

export default TagsListView;
