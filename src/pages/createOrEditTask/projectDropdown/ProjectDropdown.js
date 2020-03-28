import React from 'react';
import { Field } from 'react-final-form';
import { useFetchProjectOptions } from 'hooks';

//@TODO: Make test for this
const ProjectDropDown = () => {
    const projectOptions = useFetchProjectOptions();

    return <Field name="selectedProject" component="select" >
        {projectOptions.map(project => <option value={project.value}>{project.icon}</option>)}
    </Field>
};

export default ProjectDropDown;