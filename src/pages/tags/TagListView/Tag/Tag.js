import React from 'react';
import PropType from 'prop-types';
import cn from 'classnames';
import { useBrowserHistory } from 'hooks';
import DeleteTagButton from './DeleteTagButton/DeleteTagButton';
import styles from './Tag.module.css';


const Tag = ({ _id, name, description = '', setTags, selectedId }) => {
  const { push } = useBrowserHistory();
  const isSelected = selectedId === _id;

  return (
    <div className={styles.container}>
      <div className={cn(styles.item, { [styles.selected]: isSelected })}>
        <div className={styles.itemLeft}
          onClick={() => {
            sessionStorage.setItem('LOCATION', `/tag/${_id}`);
            push(`/tag/${_id}`);
            window.location.reload();
          }}
        >
          <div className={styles.name}>
            {name}
          </div>
        </div>
        <DeleteTagButton tagId={_id} setTags={setTags} isSelected={isSelected} />
      </div>
      <div className={cn(styles.underBorder, { [styles.underBorderSelected]: isSelected })} />
    </div>
  );
};

Tag.PropType = {
  _id: PropType.string,
  name: PropType.string,
  description: PropType.string,
};

export default Tag;
