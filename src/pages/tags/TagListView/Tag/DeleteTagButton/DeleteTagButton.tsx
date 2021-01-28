import React from 'react';
import cn from 'classnames';
import { Button } from 'components';
import { useFlashMessageFetchApiData, reloadAndRefresh } from 'utils';
import styles from './DeleteTagButton.module.css';

interface DeleteTagButtonProp {
  tagId: string;
  isSelected: boolean;
}

const DeleteTagButton: React.FC<DeleteTagButtonProp> = ({ tagId, isSelected }) => {
  const reload = reloadAndRefresh('tags', {}, () => {});
  const dispatch = useFlashMessageFetchApiData(`tag/${tagId}`, { method: 'DELETE' }, reload, 'Successfully deleted tag', 'Error deleting tag');

  const _deleteClick = (e: any): void => {
    e.preventDefault(); // stops us from bubbling up to the Tag.
    dispatch();
  };

  return <Button onClick={_deleteClick} className={cn(styles.deleteBtn, 'glyphicon glyphicon-trash', { [styles.selected]: isSelected })} data-testid="delete-tag-button" />;
};

export default DeleteTagButton;
