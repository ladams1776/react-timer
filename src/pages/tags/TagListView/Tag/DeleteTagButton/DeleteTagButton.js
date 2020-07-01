import React from "react";
import { useFlashMessageFetchApiData, reloadAndRefresh } from 'utils';
import cn from 'classnames';
import style from './DeleteTagButton.module.css';

const DeleteTagButton = ({ tagId, setTags }) => {
  const reload = reloadAndRefresh('tags', {}, setTags);  
  const dispatch = useFlashMessageFetchApiData(`tag/${tagId}`, { method: 'DELETE' }, reload, 'Successfully deleted tag', 'Error deleting tag');

  const _deleteClick = e => {
    e.preventDefault(); // stops us from bubbling up to the Tag.
    dispatch();
  };

  return (
    <button
      onClick={_deleteClick}
      className={cn(style.deleteBtn, "glyphicon glyphicon-remove")}
      data-test-id="delete-tag-button"
    />
  );
};

export default DeleteTagButton;
