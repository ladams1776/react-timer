import React, { useContext } from "react";
import TaskEditFormContext from '../../TaskEditFormContext';
import PropType from "prop-types";
import "./TextArea.css";

const TextArea = () => {
  const context = useContext(TaskEditFormContext);
  const { description, updateDescription } = context;

  return (
    <div className="text-area">
      <label className="text-area__label" htmlFor="description">
        Description
      </label>
      <textarea
        className="text-area__description"
        name="description"
        value={description}
        onChange={e => updateDescription(e.target.value)}
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
