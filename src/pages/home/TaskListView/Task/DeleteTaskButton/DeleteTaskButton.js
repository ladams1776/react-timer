import React from "react";
import cn from 'classnames';
import { fetchApiData } from 'utils';
import { useBrowserHistory } from 'hooks';
import useDispatch from './useDispatch';
import { Button } from "components";
import styles from './DeleteTaskButton.module.css';

const DeleteTaskButton = ({ taskId, isSelected }) => {
  const { push } = useBrowserHistory();
  const dispatch = useDispatch(taskId);

  const _deleteClick = async e => {
    const isDeleting = window.confirm("Are you sure you want to delete task?");
    const reload = data => {
      dispatch(data);
      push('/');
    };

    if (isDeleting) {
      e.preventDefault();
      fetchApiData(`task/${taskId}`, { method: 'DELETE' }, reload);
    }
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
