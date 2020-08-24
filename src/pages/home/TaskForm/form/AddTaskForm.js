import React from 'react';
import { useBackButtonListener, useSetCurrentLocation } from 'hooks';
import { TextAreaAdapter } from 'components';
import {
  useFetchTaskById,
  useTagContext,
  useFetchTags,
  useSubmit,
  useFormReducer,
} from '../hooks';
import Timer from '../timer/Timer';
import ProjectDropDown from '../projectDropdown/ProjectDropdown';
import TagMultiSelect from '../tagMultiSelect/TagMultiSelect';
import styles from './TaskForm.module.css';

const AddTaskForm = ({ taskId, className }) => {
  useSetCurrentLocation(`/task/${taskId}`);
  useBackButtonListener();
  const [
    state,
    dispatch,
    onProjectChange,
    onTextChange,
    onTagChange,
  ] = useFormReducer();

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
        <ProjectDropDown value={project} onChange={onProjectChange} />
        <TagMultiSelect tags={tags} onChange={onTagChange} />

        <TextAreaAdapter
          description={description}
          setDescription={onTextChange}
        />

        <button
          type="submit"
          className={styles.submit}
          onClick={onSubmit}
          data-test-id="submit"
        >
          Submit
          </button>
      </form>
    </div>
  );
};

export default AddTaskForm;
