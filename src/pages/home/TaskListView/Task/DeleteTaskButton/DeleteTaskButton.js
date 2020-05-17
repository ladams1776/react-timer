import React from "react";
import { fetchApiData } from 'utils';
import useDispatch from './useDispatch';
import cn from 'classnames';
import style from './DeleteTaskButton.module.css';

const DeleteTaskButton = ({ taskId }) => {
  const dispatch = useDispatch(taskId);

  const _deleteClick = async e => {
    e.preventDefault();
    fetchApiData(`task/${taskId}`, { method: 'DELETE' }, dispatch);
  };

  return (
    <button
      onClick={_deleteClick}
      className={cn(style.deleteBtn, "glyphicon glyphicon-remove")}
      data-test-id="delete-task-button"
    />
  );
};

export default DeleteTaskButton;
