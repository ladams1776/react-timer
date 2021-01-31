import React from 'react';
import cn from 'classnames';
import { useBrowserHistory } from 'hooks';
import DeleteTagButton from './DeleteTagButton/DeleteTagButton';
import styles from './Tag.module.css';

interface TagProp {
  _id: string;
  name: string;
  selectedId: string;
}

const Tag: React.FC<TagProp> = ({ _id, name, selectedId }) => {
  const { push } = useBrowserHistory();
  const isSelected = selectedId === _id;

  return (
    <div className={styles.container} data-testid="tag">
      <div className={cn(styles.item, { [styles.selected]: isSelected })}>
        <div
          className={styles.itemLeft}
          onClick={() => {
            sessionStorage.setItem('LOCATION', `/tag/${_id}`);
            push(`/tag/${_id}`);
            window.location.reload();
          }}
        >
          <div className={styles.name}>{name}</div>
        </div>
        <DeleteTagButton tagId={_id} isSelected={isSelected} />
      </div>
      <div className={cn(styles.underBorder, { [styles.underBorderSelected]: isSelected })} />
    </div>
  );
};

export default Tag;
