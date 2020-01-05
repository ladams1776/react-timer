import React from "react";
import useTaskEditContext from "../hooks/useTaskEditContext";
import PropType from "prop-types";
import "./TextArea.css";

const TextArea = () => {
  const { description, updateDescription } = useTaskEditContext();

  return (
    <div className="text-area">
      <textarea
        className="text-area__description"
        name="description"
        value={description}
        onChange={e => updateDescription(e.target.value)}
        // maxLength="254"
        rows="2"
        cols="50"
        data-test-id="description-textarea"
      />
    </div>
  );
};

TextArea.PropType = {
  taskId: PropType.string,
  handler: PropType.func,
  description: PropType.string
};

export default TextArea;
