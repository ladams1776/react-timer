import React from 'react';
import { Field } from 'react-final-form';
import { useFetchProjectOptions } from 'hooks';
import styles from './ProjectDropdown.module.css';

const ProjectDropDown = ({ ...rest }) => {
  const projectOptions = useFetchProjectOptions();

  return (
    <div className={styles.dropDown}>
      <select component="select" {...rest} data-test-id="select">
        {projectOptions.map(project => (
          <option value={project.value} key={project.value}>
            {project.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProjectDropDown;
