import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { useTaskEditContext, useBackButtonListener, useFetchTaskById } from 'hooks';
import getFormattedDate from "utils/getFormattedDate";
import ProjectDropDown from "../projectDropdown/ProjectDropdown";
import Timer from "../timer/Timer";


const EditTaskForm = ({ taskId, history }) => {
    useBackButtonListener(history);
    const [time, setTime] = useState(0);
    useFetchTaskById(taskId, setTime);
    const { setMessage, task } = useTaskEditContext();


    const onSubmit = event => {
        const date = new Date();
        const dateFormatted = getFormattedDate(date);

        const timeTask = {
            date: dateFormatted,
            WorkUnit: [
                {
                    time,
                    contractId: event?.selectedProject || 0,
                    description: event?.description || ''
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
            }
        }).catch(error => console.log(error, 'Error!'));
    };

    return (
        <Form
            initialValues={{
                description: task.description,
                selectedProject: task.contractId
            }}
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <div className="taskFormContainer">
                    <div class="form">
                        <form className="taskForm" onSubmit={handleSubmit}>
                            <Timer time={time} setTime={setTime}>
                                <ProjectDropDown />
                            </Timer>
                            <div className="textArea">
                                <Field name="description" component="textarea" cols="80" rows="10" />
                            </div>

                            <button type="submit" className="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        />
    )
};

//@TODO: Replace this with the pipeline operator.
export default withRouter(EditTaskForm);