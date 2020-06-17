import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Form, Field } from 'react-final-form';
import { MultiSelectAdapter, TextAreaAdapter } from 'components';
import {
  useTaskEditContext,
  useBackButtonListener,
  useBrowserHistory,
} from 'hooks';
import styles from './TaskForm.module.css';
import Timer from '../timer/Timer';
import ProjectDropDown from '../projectDropdown/ProjectDropdown';
import {
  useTimeContext,
  useFetchTaskById,
  useTagTransformer,
  useTagContext,
  useFetchTags,
  useFetchDispatch,
  useSubmit,
} from '../hooks';
import ControlPanel from '../timer/controlPanel/ControlPanel';

/**
 * @Deprecated, in favor of AddTaskForm.js
 * @param {} param0 
 */
const EditTaskForm = ({ taskId }) => {
  const [task, setTask] = useState({ _id: taskId });

  // Should we be able to go back stuff
  useBackButtonListener();
  // Should we be able to refresh stuff
  const [shouldBlockNavigation, setshouldBlockNavigation] = useState(false);

  // Project Stuff
  const projectRef = useRef(null);

  // Timer stuff
  const [isActive, setIsActive] = useState(false);
  const { time, setTime } = useTimeContext();
  const setTimeCallback = useCallback(times => setTime(times), [setTime]);

  const [description, setDescription] = useState(null); // cannot do uncontrolled form for TinyMCE, because it won't get the most recent data.

  const useDispatch = useFetchDispatch(setTask);
  useFetchTaskById(task._id, useDispatch);

  // Tag Stuff
  useFetchTags();
  const { tags } = useTagContext();
  const initialTags = useTagTransformer(task?.tags);
  const allTags = useTagTransformer(tags);
  const [selectOption, setSelectOption] = useState(initialTags);

  const onSubmit = useSubmit(task, description, projectRef, selectOption);

  useEffect(() => {
    sessionStorage.setItem('LOCATION', `/task/${taskId}`);
  }, [taskId]);

  useEffect(() => {
    if (shouldBlockNavigation) {
      window.onbeforeunload = () => true;
    } else {
      //@TODO: This is a heuristic hack, fix this - this is for handling refreshing and throwing up a warning
      setshouldBlockNavigation(true);
      window.onbeforeunload = undefined;
    }
  }, [taskId, shouldBlockNavigation]);

  return (
    <div className={styles.taskFormContainer}>
      <div className={styles.form}>
        <form
          className={styles.taskForm}
          method={taskId === -1 ? 'POST' : 'PUT'}
        >
          <ControlPanel
            time={time}
            setTime={setTimeCallback}
            isActive={isActive}
            setIsActive={setIsActive}
          >
            <ProjectDropDown init={task?.contractId} compRef={projectRef} />
            <Timer />
            <MultiSelectAdapter
              name="tags"
              className={styles.dropDown}
              options={allTags}
              selectOption={selectOption}
              setSelectOption={setSelectOption}
            />
          </ControlPanel>

          <div className={styles.textArea}>
            <TextAreaAdapter
              description={task.description}
              setDescription={setDescription}
            />
          </div>

          <button
            type="submit"
            className={styles.submit}
            onClick={e => {
              e.preventDefault();
              return onSubmit(e);
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTaskForm;
