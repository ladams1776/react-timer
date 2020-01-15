import React from 'react';
import { render } from 'react-dom';
import { Form, Field } from 'react-final-form';
import { useFetchProjectOptions } from 'hooks';

const onSubmit = values => {
    window.alert(JSON.stringify(values, 0, 2));
}

const TaskForm = () => {
    const projectOptions = useFetchProjectOptions();

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Description</label>
                        <Field name="description" component="textarea" />
                    </div>

                    <div>
                        <label>Projects</label>
                        <Field name="projects" component="select" >
                            {projectOptions.map(project => <option value={project.value}>project.label</option>)}
                        </Field>
                    </div>
                    <button type="submit" disabled={submitting || pristine}>
                        Submit
                </button>
                </form>
            )}
        />
    )
};

export default TaskForm;