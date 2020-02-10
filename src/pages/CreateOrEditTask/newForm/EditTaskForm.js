import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { useFetchProjectOptions, useTaskEditContext, useBackButtonListener } from 'hooks';
import getFormattedDate from "utils/getFormattedDate";
import useFetchTaskById from './useFetchTaskById';
import Timer from "../Form/EditTask/Timer/Timer";


const EditTaskForm = ({ taskId, history }) => {
    const [time, setTime] = useState(0);
    useFetchTaskById(taskId, setTime);
    const projectOptions = useFetchProjectOptions();
    const { setMessage, task } = useTaskEditContext();

    useBackButtonListener(history);

    const onSubmit = event => {
        const date = new Date();
        const dateFormatted = getFormattedDate(date);

        const timeTask = {
            date: dateFormatted,
            WorkUnit: [
                {
                    time,
                    contractId: event?.projects || 0,
                    description: event.description || ''
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
                <div className="taskFormContainer">
                    <div class="form">
                        <form className="taskForm" onSubmit={handleSubmit}>
                            <div className="textArea">
                                <Field name="description" component="textarea" cols="80" rows="10" />
                            </div>

                            <div className="taskForm__control">
                                <div className="dropDown">
                                    <Field name="projects" component="select" >
                                        {projectOptions.map(project => <option value={project.value}>{project.label}</option>)}
                                    </Field>
                                </div>
                                <Timer time={time} setTime={setTime}>
                                    <button type="submit" className="submit">
                                        Submit
                                    </button>
                                </Timer>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        />
    )
};

//@TODO: Replace this with the pipeline operator.
export default withRouter(EditTaskForm);