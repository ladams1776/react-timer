import React from 'react';
import PropTypes from "prop-types";
import { useSelector, useDispatch } from 'react-redux'
import { TextAreaAdapter } from 'components';
import useTaskEditContext from 'pages/home/hooks/useTaskEditContext';
import ProjectDropDown from 'pages/home/TaskForm/projectDropdown/ProjectDropdown';
import TagMultiSelect from 'pages/home/TaskForm/tagMultiSelect/TagMultiSelect';
import Timer from 'pages/home/TaskForm/timer/Timer';
import DateTimeButton from './dateTimePage/DateTimeButton';
import SubmitButton from './SubmitButton';
import styles from './TaskForm.module.css';
import { useFetchTags, useFetchTaskById } from '../hooks';
import { simpleAction } from '../../../../redux/actionCreators/simpleAction';
import { fetchTaskById } from '../../../../redux/actionCreators/actions';


const AddTaskForm = ({ taskId, className }) => {
  const {
    state,
    dispatchTask,
    onProjectDropDownChange,
    onTextAreaChange,
    onTagChange,
  } = useTaskEditContext();
  const dispatch = useDispatch()
  useFetchTaskById(taskId, dispatchTask);
  useFetchTags();
  const { description, tags, project } = state;

  const result = useSelector(state => state.simpleReducer.result);

  console.log('yeah', result);
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
