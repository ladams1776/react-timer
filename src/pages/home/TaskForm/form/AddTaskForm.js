import React from 'react';
import PropTypes from "prop-types";
import { TextAreaAdapter } from 'components';
import useTaskEditContext from 'pages/home/hooks/useTaskEditContext';
import ProjectDropDown from 'pages/home/TaskForm/projectDropdown/ProjectDropdown';
import TagMultiSelect from 'pages/home/TaskForm/tagMultiSelect/TagMultiSelect';
import Timer from 'pages/home/TaskForm/timer/Timer';
import DateTimeButton from 'pages/home/TaskForm/dateTimeDetail/DateTimeButton';
import SubmitButton from './SubmitButton';
import styles from './TaskForm.module.css';
import { useFetchTags, useFetchTaskById } from '../hooks';

const AddTaskForm = ({ taskId, className }) => {
  const {
    state,
    dispatchTask,
    onProjectDropDownChange,
    onTextAreaChange,
    onTagChange,
  } = useTaskEditContext();

  useFetchTaskById(taskId, dispatchTask);
  useFetchTags();
  const { description, tags, project } = state;

  return (
    <div className={className} data-testid="addTaskForm">
      <DateTimeButton taskId={taskId} />
      <Timer />

      <div className={styles.timeInfoContainer}>
        <div className={styles.innerLeft}>
          <ProjectDropDown value={project} onChange={onProjectDropDownChange} />
        </div>
        <div className={styles.innerRight}>
          <TagMultiSelect tags={tags} onChange={onTagChange} />
        </div>
      </div>

      <TextAreaAdapter
        description={description}
        setDescription={onTextAreaChange}
        id={taskId} />

      <form
        className={styles.taskForm}
        method={taskId === -1 ? 'POST' : 'PUT'}
        data-test-id="form">
        <SubmitButton />
      </form>
    </div>
  );
};

AddTaskForm.propTypes = {
  taskId: PropTypes.string,
  className: PropTypes.string
}

export default AddTaskForm;
