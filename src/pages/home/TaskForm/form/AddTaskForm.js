import React from 'react';
import PropTypes from "prop-types";
import cn from 'classnames';
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
import styles from './TaskForm.module.css';


const onClickTimer = e => {

};

const AddTaskForm = ({ taskId, className }) => {
  const {
    state,
    dispatch,
    onProjectDropDownChange,
    onTextAreaChange,
    onTagChange,
  } = useTaskEditContext();

  useFetchTaskById(taskId, dispatch);

  // Tag Stuff
  useFetchTags();
  const { allTags } = useTagContext();
  const onSubmit = useSubmit(state, allTags, dispatch);
  const { description, tags, project, dateTime } = state;
  return (
    <div className={className}>
      <form
        className={styles.taskForm}
        method={taskId === -1 ? 'POST' : 'PUT'}
        data-test-id="form"
      >
        <Timer />
        <div className={"timeInfoContainer"}>
          <ProjectDropDown value={project} onChange={onProjectDropDownChange} />
          <div className={cn("timeInfo", "glyphicon glyphicon-time")} onClick={onClickTimer}>
            
          </div>
          {dateTime.map(dT => {
            return (
              <>
                <div>{dT.date}</div>
                <div>{dT.time}</div>
              </>);
          })}
        </div>
        <TagMultiSelect tags={tags} onChange={onTagChange} />
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
          title="Submit"
        >
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
