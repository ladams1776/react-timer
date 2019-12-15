import React from 'react';
import useTaskEditContext from 'pages/CreateOrEditTask/Form/EditTask/hooks/useTaskEditContext';

const DeleteTaskButton = ({ taskId }) => {
  const { setMessage } = useTaskEditContext();
  const _deleteClick = e => {
    e.preventDefault();
    fetch(`/api/task/${taskId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(() =>
        setTimeout(() => {
          //@TODO: Message is not working cux of reload, but we want to push
          //@TODO: back to homepage to resolve this
          setMessage(`Successfully Deleted Task with id of ${taskId}`);
          window.location.reload();
        }, 500)
      );
  };

  return (
    <button
      onClick={_deleteClick}
      className="task-item__delete-btn glyphicon glyphicon-remove"
      data-test-id="delete-task-button"
    />
  );
};

export default DeleteTaskButton;
