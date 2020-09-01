import React from "react";
import { fetchApiData } from 'utils';
import useDispatch from './useDispatch';
import cn from 'classnames';
import { Button } from "components";
import styles from './DeleteTaskButton.module.css';

const DeleteTaskButton = ({ taskId, isSelected }) => {
  const dispatch = useDispatch(taskId);

  const _deleteClick = async e => {
    e.preventDefault();
    fetchApiData(`task/${taskId}`, { method: 'DELETE' }, dispatch);
  };

  return (
    <Button
      onClick={_deleteClick}
      className={cn(styles.deleteBtn, "glyphicon glyphicon-trash", { [styles.selected]: isSelected })}
      data-test-id="delete-task-button"
    />
  );
};

export default DeleteTaskButton;
