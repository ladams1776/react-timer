import React from 'react';
import { Form, Field } from 'react-final-form';
import { useFetchProjectOptions, useTaskEditContext } from 'hooks';
import getFormattedDate from "utils/getFormattedDate";
import useFetchTaskById from './useFetchTaskById';
import Timer from "../Form/EditTask/Timer/Timer";

const EditTaskForm = ({ taskId }) => {
    useFetchTaskById(taskId);
    const projectOptions = useFetchProjectOptions();
    const { time, setMessage, task } = useTaskEditContext();

    const onSubmit = event => {
        const date = new Date();
        const dateFormatted = getFormattedDate(date);

        const timeTask = {
            date: dateFormatted,
            WorkUnit: [
                {
                    time,
                    contractId: event?.projects || 0,
                    description: event.description
                }
            ]
        };

        timeTask._id = task._id

        fetch("/api/task", {
            method: "PUT",
            body: JSON.stringify(timeTask),
            headers: { "Content-Type": "application/json" }
        }).then(e => {
            if (e.status === 200) {
                setMessage("Successfully created/updated a Task");
                // setIsLoading(false);
            }
        }).catch(error => console.log(error, 'Error!'));
    };

    return (
        <Form
            initialValues={{
                description: task.description,
                projects: task.project
            }}
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
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
                    <Timer />
                    <button type="submit">
                        Submit
                    </button>
                </form>
            )}
        />
    )
};

export default EditTaskForm;