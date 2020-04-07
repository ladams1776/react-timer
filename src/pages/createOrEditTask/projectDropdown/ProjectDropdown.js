import React from 'react';
import { Field } from 'react-final-form';
import { useFetchProjectOptions } from 'hooks';
//@TODO: Make test for this
const ProjectDropDown = () => {
    const projectOptions = useFetchProjectOptions();

    return <div className="dropDown">
        <Field name="selectedProject" component="select" >
            {projectOptions.map(project => <option value={project.value} key={project.value}>{project.label}</option>)}
        </Field>
    </div>
};

export default ProjectDropDown;