import React from 'react';
import PropType from 'prop-types';
import { useBrowserHistory } from 'hooks';
import DeleteTagButton from './DeleteTagButton/DeleteTagButton';
import style from './Tag.module.css';

const Tag = ({ _id, name, description = '' }) => {
  const { push } = useBrowserHistory();
  return (
    <div className={style.tagItem} data-test-id="tag">
      <div
        className={style.tagItemLeft}
        onClick={() => {
          sessionStorage.setItem('LOCATION', `/tag/${_id}`);
          push(`/tag/${_id}`);
        }}
      >
        <div>
          {name}
        </div>
        <div
          className={style.tagItemDescription}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <DeleteTagButton tagId={_id} />
    </div>
  );
};

Tag.PropType = {
  _id: PropType.string,
  name: PropType.string,
  description: PropType.string,
};

export default Tag;
