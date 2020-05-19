import React, { useState, useCallback } from 'react';
import { Form, Field } from 'react-final-form';
import { fetchApiData } from 'utils';
import {
  useTaskEditContext,
  useBackButtonListener,
  useFlashMessageContext
} from 'hooks';
import { MultiSelectAdapter } from "components";
import { getFormattedDate } from 'utils';
import { useFetchTaskById } from '../hooks'
import ProjectDropDown from '../projectDropdown/ProjectDropdown';
import Timer from '../timer/Timer';
import ControlPanel from '../timer/controlPanel/ControlPanel';
import styles from './TaskForm.module.css';


import {
  useTagTransformer,
  useTagContext,
  useFetchTags,
  useFormDispatch
} from '../hooks';
import { selectEventTags } from '../selectors';
import TextAreaAdapter from '../../../components/TextAreaAdapter';
import taskIdDispatch from './taskIdDispatch'

const EditTaskForm = ({ taskId }) => {
  useBackButtonListener();
  const { setErrorFlashMessage } = useFlashMessageContext();
  const { task, updateTask } = useTaskEditContext();
  const { tags } = useTagContext();
  const [time, setTime] = useState(0);
  const setTimeCallback = useCallback((time) => setTime(time), [setTime]);
  const dispatch = useFormDispatch();


  const useFetchDispatch = useCallback(data =>
    taskIdDispatch(setTime, updateTask)(data),
    [setTime, updateTask, setErrorFlashMessage]);

  useFetchTaskById(taskId, useFetchDispatch);

  useFetchTags();

  const initialTags = useTagTransformer(task.tags);
  const allTags = useTagTransformer(tags);

  const selectTags = selectEventTags(tags);
  /**
   * These really can live in the Timer comp, but to be able to Unit test the Timer
   * and not try to figure out how to mock what useState returns... this seems to be
   * an easy compromise. Or at least a late night, tired one.
   */
  const [isActive, setIsActive] = useState(false);

  const onSubmit = event => {
    const dateFormatted = getFormattedDate(new Date());
    const selectedTags = selectTags(event.tags);

    //@TODO: We need to get this time from the useRef - perhaps.
    const timeTask = {
      _id: event.id,
      date: dateFormatted,
      WorkUnit: [
        {
          time,
          contractId: event?.selectedProject || 0,
          description: event?.description || '',
          tags: selectedTags
        },
      ],
    };

    //@TODO: Need to test this
    const method = event.id ? 'PUT' : 'POST';

    fetchApiData('task', { body: timeTask, method }, dispatch);
  };

  //@todo: how to auto save
  return (
    <Form
      initialValues={{
        description: task.description,
        selectedProject: task.contractId,
        tags: initialTags,
        id: task._id
      }}
      onSubmit={onSubmit}
      render={({ handleSubmit, pristine }) => (
        <div className={styles.taskFormContainer}>
          <div className={styles.form}>
            <form className={styles.taskForm} onSubmit={handleSubmit}>
              <Field
                component="input"
                type="hidden"
                name="id"
              />
              <ControlPanel
                time={time}
                setTime={setTimeCallback}
                isActive={isActive}
                setIsActive={setIsActive}
              >
                <ProjectDropDown />
                <Timer time={time} />
                <Field
                  name="tags"
                  className={styles.dropDown}
                  component={MultiSelectAdapter}
                  options={allTags}
                />
              </ControlPanel>

              <div className={styles.textArea}>
                <Field
                  name="description"
                  component={TextAreaAdapter}
                />
              </div>

              <button type="submit" className={styles.submit} disabled={pristine}>
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