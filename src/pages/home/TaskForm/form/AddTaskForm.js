import React from 'react';
import PropTypes from "prop-types";
import { TextAreaAdapter, Button } from 'components';
import {
  useFetchTaskById,
  useTagContext,
  useFetchTags,
  useSubmit,
} from 'pages/home/TaskForm/hooks';
import useTaskEditContext from 'pages/home/hooks/useTaskEditContext';
import ProjectDropDown from 'pages/home/TaskForm/projectDropdown/ProjectDropdown';
import TagMultiSelect from 'pages/home/TaskForm/tagMultiSelect/TagMultiSelect';
import Timer from 'pages/home/TaskForm/timer/Timer';
import DateTimeButton from 'pages/home/TaskForm/dateTimeDetail/DateTimeButton';
import styles from './TaskForm.module.css';
import SubmitButton from './SubmitButton';

const AddTaskForm = ({ taskId, className }) => {
  const {
    state,
    dispatch,
    onProjectDropDownChange,
    onTextAreaChange,
    onTagChange,
  } = useTaskEditContext();

  useFetchTaskById(taskId, dispatch);
  useFetchTags();
  const { description, tags, project } = state;

  console.log('id ', taskId);
  return (
    <div className={className}>
      <DateTimeButton taskId={taskId} />
      <Timer />
      <form
        className={styles.taskForm}
        method={taskId === -1 ? 'POST' : 'PUT'}
        data-test-id="form"
      >
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
          id={taskId}
        />

      <SubmitButton className={styles.submit}/>
      </form>
    </div>
  );
};

AddTaskForm.propTypes = {
  taskId: PropTypes.string,
  className: PropTypes.string
}

export default AddTaskForm;
