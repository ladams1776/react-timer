import React from 'react';
import { Form, Field } from 'react-final-form';
import { useFetchProjectOptions, useTaskEditContext } from 'hooks';
import getFormattedDate from "utils/getFormattedDate";
import Timer from "../Form/EditTask/Timer/Timer";
import useFetchTaskById from './useFetchTaskById';

const TaskForm = ({ match }) => {
    const taskId = match?.params?.id || "-1"
    const projectOptions = useFetchProjectOptions();
    const { time, setMessage } = useTaskEditContext();
    const task = useFetchTaskById(taskId);

    const onSubmit = event => {
        const date = new Date();
        const dateFormatted = getFormattedDate(date);

        const timeTask = {
            date: dateFormatted,
            WorkUnit: [
                {
                    time: event.time,
                    contractId: event?.projects || 0,
                    description: event.description
                }
            ]
        };

        timeTask._id = taskId;
        console.log('timeTask is: ', timeTask);
        fetch("/api/task", {
            method: "POST",
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
                description: '',
                time
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
                    <Field name="time" component={Timer} type="hidden" />
                    <button type="submit" disabled={submitting || pristine}>
                        Submit
                </button>
                </form>
            )}
        />
    )
};

export default TaskForm;