import React from "react";
import { fetchApiData } from 'utils';
import useDispatch from './useDispatch';
import cn from 'classnames';
import style from './DeleteTagButton.module.css';

const DeleteTagButton = ({ tagId }) => {
  const dispatch = useDispatch(tagId);

  const _deleteClick = async e => {
    e.preventDefault();
    fetchApiData(`tag/${tagId}`, { method: 'DELETE' }, dispatch);
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
