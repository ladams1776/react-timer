import React from 'react';
import useTaskEditContext from '../useTaskEditContext';
import PropType from 'prop-types';
import './TextArea.css';

const TextArea = () => {
  const { description, updateDescription } = useTaskEditContext();

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
        data-test-id="description-textarea"
      />
      <span
        className="text-area__character-length"
        data-test-id="description-count"
      >
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
