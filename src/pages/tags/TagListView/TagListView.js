import React, { useState } from 'react';
import useFetchAllTags from './useFetchAllTags';
import Tag from './Tag/Tag';
import ControlButtons from './ControlButtons/ControlButtons';
import './TagListView.css';

const TagsListView = () => {
  const [tags, setTags] = useState([]);
  useFetchAllTags(setTags);

  return (
    <div data-test-id="list-view">
      <div className="tag-list__header">
        <ControlButtons />
      </div>
      <ul className="tag-list">
        {tags.map(tag => (
          <li key={tag._id} className="tag">
            <Tag {...tag} key={tag._id} setTags={setTags}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagsListView;
