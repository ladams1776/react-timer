import React from "react";

const DeleteTaskButton = ({ taskId }) => {
  
  const _deleteClick = e => {
    e.preventDefault();
    fetch(`/api/task/${taskId}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(setTimeout(() => window.location.reload(), 500));
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
