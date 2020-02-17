import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { useFetchProjectOptions, useTaskEditContext } from 'hooks';
import { getFormattedDate } from "utils";
import Timer from "../timer/Timer";
import './TaskForm.scss';

const AddTaskForm = ({ history }) => {
    const projectOptions = useFetchProjectOptions();
    const { setMessage, task } = useTaskEditContext();
    const [time, setTime] = useState(0);

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

        timeTask._id = task?._id || "-1";

        fetch("/api/task", {
            method: "POST",
            body: JSON.stringify(timeTask),
            headers: { "Content-Type": "application/json" }
        }).then(res => {
            if (res.status === 200) {
                setMessage("Successfully created/updated a Task");
                return res.json();
                // setIsLoading(false);
            }
        }).then(data => {
            history.push(`/task/${data._id}`);
        }).catch(error => console.log(error, 'Error!'));
    };

    return (
        <Form
            initialValues={{
                description: '',
                projects: 0
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

//@TODO: Come back and use pipeline operator
export default withRouter(AddTaskForm);