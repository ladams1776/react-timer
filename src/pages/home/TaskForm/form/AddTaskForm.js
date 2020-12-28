import React from 'react';
import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux'
import { TextAreaAdapter } from 'components';
import useTaskEditContext from 'pages/home/hooks/useTaskEditContext';
import ProjectDropDown from 'pages/home/TaskForm/projectDropdown/ProjectDropdown';
import TagMultiSelect from 'pages/home/TaskForm/tagMultiSelect/TagMultiSelect';
import Timer from 'pages/home/TaskForm/timer/Timer';
import DateTimeButton from './dateTimePage/DateTimeButton';
import SubmitButton from './SubmitButton';
import { useFetchTags, useFetchTaskById } from '../hooks';
import { fetchTaskById } from '../../../../redux/actionCreators/actions';
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
  
  const dispatch = useDispatch()
  useFetchTaskById(taskId, dispatchTask);
  useFetchTags();
  useFetchTaskByIdTransition(taskId);
  const task = useTaskSelector();
  const { description, tags, project } = task;

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
      <button onClick={() => dispatch(fetchTaskById(taskId))}>click me</button>

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
