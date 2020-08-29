import React from "react";
import { useFlashMessageFetchApiData, reloadAndRefresh } from 'utils';
import cn from 'classnames';
import styles from './DeleteTagButton.module.css';

const DeleteTagButton = ({ tagId, setTags, isSelected }) => {
  const reload = reloadAndRefresh('tags', {}, setTags);
  const dispatch = useFlashMessageFetchApiData(`tag/${tagId}`, { method: 'DELETE' }, reload, 'Successfully deleted tag', 'Error deleting tag');

  const _deleteClick = e => {
    e.preventDefault(); // stops us from bubbling up to the Tag.
    dispatch();
  };

  return (
    <button
      onClick={_deleteClick}
      className={cn(styles.deleteBtn, "glyphicon glyphicon-trash", { [styles.selected]: isSelected })}
      data-test-id="delete-tag-button"
    />
  );
};

export default DeleteTagButton;
