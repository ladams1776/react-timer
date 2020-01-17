import React from 'react';
import { render } from 'react-dom';
import { Form, Field } from 'react-final-form';
import useTaskEditContext from "hooks/useTaskEditContext";
import getFormattedDate from "utils/getFormattedDate";
import Timer from "../Form/EditTask/Timer/Timer";
import { useFetchProjectOptions } from 'hooks';

// const onSubmit = values => {
//     window.alert(JSON.stringify(values, 0, 2));
// }

const TaskForm = () => {
    const projectOptions = useFetchProjectOptions();
    const {
        time,
        setMessage,
        description,
        selectedProject,
        projects
    } = useTaskEditContext();
    const taskId = -1;
    // const taskId = match.params.id;

    const onSubmit = event => {
        const date = new Date();
        const dateFormatted = getFormattedDate(date);

        const timeTask = {
            date: dateFormatted,
            WorkUnit: [
                {
                    time: event.time,
                    contractId: event.projects,
                    description: event.description
                }
            ]
        };

        timeTask._id = taskId !== -1 ? taskId : null;

        fetch("/api/task", {
            method: "POST",
            body: JSON.stringify(timeTask),
            headers: { "Content-Type": "application/json" }
        }).then(e => {
            if (e.status === 200) {
                setMessage("Successfully created/updated a Task");
                // setIsLoading(false);
            }
        });
    };

    // @TODO: LEFT OFF HERE - initializing state, but need to find a way of updating the timer and updating the form - this might have it: https://codesandbox.io/s/oq52p6v96y
    return (
        <Form
            initialValues={{
                description: 'this is a description',
                projects: 1,
                time: 1235
            }}
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
                            {projectOptions.map(project => <option value={project.value}>{project.label}</option>)}
                        </Field>
                    </div>
                    <Field name="time" component={Timer} type="text"/>
                    <button type="submit" disabled={submitting || pristine}>
                        Submit
                </button>
                </form>
            )}
        />
    )
};

export default TaskForm;