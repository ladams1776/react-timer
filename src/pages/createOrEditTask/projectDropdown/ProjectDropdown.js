import React from 'react';
import { Field } from 'react-final-form';
import { useFetchProjectOptions } from 'hooks';
import styles from './ProjectDropdown.module.css';

//@TODO: Make test for this
const ProjectDropDown = () => {
    const projectOptions = useFetchProjectOptions();

    return <div className={styles.dropDown}>
        <Field name="selectedProject" component="select" >
            {projectOptions.map(project => <option value={project.value} key={project.value}>{project.label}</option>)}
        </Field>
    </div>
};

export default ProjectDropDown;