import React, { useState, useCallback } from 'react';
import { Form, Field } from 'react-final-form';
import { MultiSelectAdapter, TextAreaAdapter } from 'components';
import { useTaskEditContext, useBackButtonListener } from 'hooks';
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

const EditTaskForm = ({ taskId }) => {
  useBackButtonListener();

  const [isActive, setIsActive] = useState(false);
  const { task } = useTaskEditContext();
  const { tags } = useTagContext();
  const { time, setTime } = useTimeContext();
  const setTimeCallback = useCallback(time => setTime(time), [setTime]);
  const onSubmit = useSubmit();
  const useDispatch = useFetchDispatch();
  useFetchTaskById(taskId, useDispatch);
  useFetchTags();

  const initialTags = useTagTransformer(task.tags);
  const allTags = useTagTransformer(tags);

  //@todo: how to auto save
  return (
    <Form
      data-test-id="form"
      initialValues={{
        description: task.description,
        selectedProject: task.contractId,
        tags: initialTags,
        id: task._id,
      }}
      onSubmit={onSubmit}
      render={({ handleSubmit, pristine }) => (
        <div className={styles.taskFormContainer}>
          <div className={styles.form}>
            <form className={styles.taskForm} onSubmit={handleSubmit}>
              <Field component="input" type="hidden" name="id" />
              <ControlPanel
                time={time}
                setTime={setTimeCallback}
                isActive={isActive}
                setIsActive={setIsActive}
              >
                <ProjectDropDown />
                <Timer />
                <Field
                  name="tags"
                  className={styles.dropDown}
                  component={MultiSelectAdapter}
                  options={allTags}
                />
              </ControlPanel>

              <div className={styles.textArea}>
                <Field name="description" component={TextAreaAdapter} />
              </div>

              <button
                type="submit"
                className={styles.submit}
                disabled={pristine}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    />
  );
};

export default EditTaskForm;
