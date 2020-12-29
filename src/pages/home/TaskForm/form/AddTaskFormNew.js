import React from 'react';
import PropTypes from "prop-types";
import { useSubmit } from '../hooks';
import { Form, Field } from 'react-final-form'
import { TextAreaAdapter } from 'components';
import useTaskEditContext from 'pages/home/hooks/useTaskEditContext';
import ProjectDropDown from 'pages/home/TaskForm/projectDropdown/ProjectDropdown';
import TagMultiSelect from 'pages/home/TaskForm/tagMultiSelect/TagMultiSelect';
import Timer from 'pages/home/TaskForm/timer/Timer';
import DateTimeButton from './dateTimePage/DateTimeButton';
import SubmitButton from './SubmitButton';
import { useFetchTags, useFetchTaskById } from '../hooks';
import useFetchTaskByIdTransition from '../hooks/useFetchTaskById/useFetchTaskByIdTransition';
import useTaskSelector from 'redux/selectors/useTaskSelector';

import styles from './TaskForm.module.css';

const AddTaskForm = ({ taskId, className }) => {
  const {
    dispatchTask,
    onProjectDropDownChange,
    onTextAreaChange,
    onTagChange,
  } = useTaskEditContext();

  useFetchTaskById(taskId, dispatchTask);
  useFetchTags();
  useFetchTaskByIdTransition(taskId);
  const onSubmit = useSubmit();

  const task = useTaskSelector();
  const { description, tags, project } = task;

  return (<div className={className} data-testid="addTaskForm">
    <DateTimeButton taskId={taskId} />
    <Timer />
    <Form
      onSubmit={onSubmit}
      initialValues={task}
      render={({ handleSubmit }) => {
        return (
          <form
            onSubmit={handleSubmit}
            className={styles.taskForm}
            method={taskId === -1 ? 'POST' : 'PUT'}
            data-test-id="form">

            <div className={styles.timeInfoContainer}>
              <div className={styles.innerLeft}>
                <ProjectDropDown value={project} onChange={onProjectDropDownChange} />
              </div>
              <div className={styles.innerRight}>
                <TagMultiSelect tags={tags} onChange={onTagChange} />
              </div>
            </div>
            <Field name="description" component={TextAreaAdapter} />
            <TextAreaAdapter
              description={description}
              setDescription={onTextAreaChange}
              id={taskId} />
            <SubmitButton />
            {/* <button type="submit">Submit</button> */}
          </form>)
      }} />
  </div>);
};

AddTaskForm.propTypes = {
  taskId: PropTypes.string,
  className: PropTypes.string
}

export default AddTaskForm;
