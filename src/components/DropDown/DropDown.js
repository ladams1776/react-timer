import React from 'react';
import * as useTaskEditContext from '~/useTaskEditContext';
import './DropDown.css';

const DropDown = () => {
  const { selectedProject, updateDropDown, projects } = useTaskEditContext();

  return (
    <div className="drop-down">
      <label className="drop-down__title">Contract Drop Down: </label>
      <select
        className="drop-down__select"
        data-test-id="select"
        value={selectedProject}
        onChange={event => updateDropDown(event.currentTarget.selectedIndex)}
      >
        {!projects ||
          projects.map(item => {
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
