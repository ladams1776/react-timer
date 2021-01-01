import React from 'react';
import PropTypes from "prop-types";
import MultiSelect from 'react-multi-select-component';
import { Form, Field } from 'react-final-form'
import { useSubmit } from '../hooks';
import { useFetchProjectOptions } from 'hooks';
import useTaskEditContext from 'pages/home/hooks/useTaskEditContext';
import TagMultiSelect from 'pages/home/TaskForm/tagMultiSelect/TagMultiSelect';
import Timer from 'pages/home/TaskForm/timer/Timer';
import DateTimeButton from './dateTimePage/DateTimeButton';
import { useFetchTags, useFetchTaskById } from '../hooks';
import useFetchTaskByIdTransition from '../hooks/useFetchTaskById/useFetchTaskByIdTransition';
import useTaskSelector from 'redux/selectors/useTaskSelector';
import TextAreaAdapterNew from '../../../../components/TextAreaAdapterNew';

import styles from './TaskForm.module.css';

const AddTaskForm = ({ taskId, className }) => {
  const { dispatchTask } = useTaskEditContext();
  useFetchTaskById(taskId, dispatchTask);
  useFetchTags();
  useFetchTaskByIdTransition(taskId);
  const onSubmit = useSubmit();

  const task = useTaskSelector();
  const { tags } = task;
  const projectOptions = useFetchProjectOptions();

  return (<div className={className} data-testid="addTaskForm">
    <DateTimeButton taskId={taskId} />
    <Timer />
    <Form
      onSubmit={onSubmit}
      initialValues={task}
      render={({ handleSubmit }) => {
        return (
          <form
            onSubmit={handleSubmit}
            className={styles.taskForm}
            method={taskId === -1 ? 'POST' : 'PUT'}
            data-test-id="form">

            <div className={styles.timeInfoContainer}>
              <div className={styles.innerLeft}>
                <Field name="project" component="select">
                  {projectOptions.map(project => (
                    <option value={project.value} key={project.value}>
                      {project.label}
                    </option>
                  ))}
                </Field>
              </div>
              <div className={styles.innerRight}>
                <Field name="tags" tags={tags} component={TagMultiSelect} />
              </div>
            </div>

            <Field name="description" component={TextAreaAdapterNew} />
            
            <button type="submit">Submit</button>

          </form>)
      }} />
  </div>);
};

AddTaskForm.propTypes = {
  taskId: PropTypes.string,
  className: PropTypes.string
}

export default AddTaskForm;
