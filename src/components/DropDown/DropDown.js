import React, { useContext } from "react";
import TaskEditFormContext from "../../TaskEditFormContext";
import "./DropDown.css";

const DropDown = () => {
  const context = useContext(TaskEditFormContext);
  const { selectedProject, updateDropDown, dropDownListContracts } = context;

  return (
    <div className="drop-down">
      <label className="drop-down__title">Contract Drop Down: </label>
      <select
        className="drop-down__select"
        value={selectedProject}
        onChange={event => updateDropDown(event.currentTarget.selectedIndex)}
      >
        {!dropDownListContracts || dropDownListContracts.map(item => {
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

export default DropDown;
