import React, { useState, useEffect } from "react";
import PropType from "prop-types";
import "./DropDown.css";

const DropDown = ({ taskId, title, list, handler }) => {
  let [selectedOption, setSelectedOption] = useState({ value: 0 });

  useEffect(() => {
    taskId = taskId || -1;

    if (taskId !== -1) {
      fetch("http://localhost:3001/api/task/" + taskId)
        .then(response => {
          return response.json();
        })
        .then(task => {
          const contractId = task.contractId || 0;
          setSelectedOption({ value: contractId });
          handler(contractId);
        });
    }
  }, []);

  const handleChange = event => {
    const newValue = event.currentTarget.selectedIndex;
    setSelectedOption({ value: newValue });
    handler(newValue);
  };

  return (
    <div className="drop-down">
      <label className="drop-down__title">{title}: </label>
      <select
        className="drop-down__select"
        value={selectedOption.value}
        onChange={handleChange}
      >
        {list.map(item => {
          return (
            <option
              className="drop-down__option"
              key={item.key}
              label={item.label}
              value={item.value}
            >
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

DropDown.PropType = {
  taskId: PropType.string,
  title: PropType.string,
  list: PropType.array,
  handler: PropType.func
};

export default DropDown;
