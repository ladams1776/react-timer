import React, { useEffect, useState } from "react";
import PropType from "prop-types";
import "./TextArea.css";

const TextArea = ({ taskId, handler }) => {
  const [description, setDescription] = useState(null);

  useEffect(() => {
    if (taskId !== -1) {
      fetch("/api/task/" + taskId)
        .then(response => {
          return response.json();
        })
        .then(task => {
          setDescription(task && task.description ? task.description : "");
          handler(task && task.description ? task.description : "");
        });
    }
  }, [taskId]);

  const handleChange = e => {
    const newDescription = e.target.value;
    setDescription(newDescription);
    handler(newDescription);
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

TextArea.PropType = {
  taskId: PropType.string,
  handler: PropType.func,
  description: PropType.string
};

export default TextArea;
