import React from 'react';
import { useBackButtonListener, useSetCurrentLocation } from 'hooks';
import { TextAreaAdapter, Button } from 'components';
import {
  useFetchTaskById,
  useTagContext,
  useFetchTags,
  useSubmit,
} from '../hooks';
import Timer from '../timer/Timer';
import ProjectDropDown from '../projectDropdown/ProjectDropdown';
import TagMultiSelect from '../tagMultiSelect/TagMultiSelect';
import styles from './TaskForm.module.css';
import useTaskEditContext from '../../hooks/useTaskEditContext';

const AddTaskForm = ({ taskId, className }) => {
  useSetCurrentLocation(`/task/${taskId}`);
  // useBackButtonListener(); - do we want this anymore?
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
  const { description, tags, project } = state;
  return (
    <div className={className}>
      <form
        className={styles.taskForm}
        method={taskId === -1 ? 'POST' : 'PUT'}
        data-test-id="form"
      >
        <Timer />
        <ProjectDropDown value={project} onChange={onProjectDropDownChange} />
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
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddTaskForm;
