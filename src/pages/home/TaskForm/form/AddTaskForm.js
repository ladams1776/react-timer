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
  const { allTags } = useTagContext();
  const onSubmit = useSubmit(state, allTags, dispatch);
  const { description, tags, project, dateTimes } = state;

  console.log('  ', dateTimes);
  return (
    <div className={className}>
      <form
        className={styles.taskForm}
        method={taskId === -1 ? 'POST' : 'PUT'}
        data-test-id="form"
      >
        <Timer />

        <div className={styles.timeInfoContainer}>
          <div className={styles.innerLeft}>
            <ProjectDropDown value={project} onChange={onProjectDropDownChange} />
            <DateTimeButton dateTimes={dateTimes} taskId={taskId} />
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

        <Button
          type="submit"
          className={styles.submit}
          onClick={onSubmit}
          data-test-id="submit"
          title="Submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

AddTaskForm.propTypes = {
  taskId: PropTypes.string,
  className: PropTypes.string
}

export default AddTaskForm;
