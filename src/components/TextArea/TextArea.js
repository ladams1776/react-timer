import React, { useEffect, useState } from "react";
import ReactRouterDom from "react-router-dom";

import "./TextArea.css";

const TextArea = props => {
  const [description, setDescription] = useState(null);
  const { taskId, handler } = props;

  useEffect(() => {
    if (taskId !== -1) {
      fetch("/api/task/" + props.taskId)
        .then(response => {
          return response.json();
        })
        .then(task => {
          //   const description = task.description ? task.description : '';
          setDescription(task && task.description ? task.description : "");
          handler(task && task.description ? task.description : "");
        });
    }
  }, [taskId]);

  const handleChange = e => {
    const newDescription = e.target.value;
    setDescription(newDescription);
    props.handler(newDescription);
  };

  return (
    <div className="text-area">
      <label className="text-area__label" htmlFor="description">
        {"Description"}
      </label>
      <textarea
        className="text-area__description"
        name="description"
        value={description}
        onChange={handleChange}
        maxLength="254"
        rows="5"
        cols="52"
      />
      <span className="text-area__character-length">
        {description && description.length} character(s)
      </span>
    </div>
  );
};

export default TextArea;
