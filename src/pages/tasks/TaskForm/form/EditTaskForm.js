import React from 'react';
import PropTypes from "prop-types";
import { Form, Field } from 'react-final-form'
import { useSubmit } from '../hooks';
import { useFetchProjectOptions } from 'hooks';
import TagMultiSelect from 'pages/tasks/TaskForm/tagMultiSelect/TagMultiSelect';
import Timer from 'pages/tasks/TaskForm/timer/Timer';
import DateTimeButton from './dateTimePage/DateTimeButton';
import { useFetchTags } from '../hooks';
import useFetchTaskByIdDispatch from '../hooks/useFetchTaskById/useFetchTaskByIdDispatch';
import useTaskByIdSelector from 'redux/selectors/useTaskByIdSelector';
import TextAreaAdapter from 'components/TextAreaAdapter';

import styles from './TaskForm.module.css';
import { Button } from 'components';

const EditTaskForm = ({ taskId, className }) => {
  useFetchTaskByIdDispatch(taskId);
  const task = useTaskByIdSelector();
  const { tags } = task;

  useFetchTags();
  const projectOptions = useFetchProjectOptions();
  
  const onSubmit = useSubmit();

  return (<div className={className} data-testid="addTaskForm">
    <DateTimeButton taskId={taskId} />
    <Timer />
    <Form
      onSubmit={onSubmit}
      initialValues={task}
      render={({ handleSubmit }) => {
        return (
          <form
            data-testid="form"
            onSubmit={handleSubmit}
            className={styles.taskForm}
            method="PUT">

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

            <Field name="description" component={TextAreaAdapter} />

            <Button type="submit" className={styles.submit} value="Submit Form" />

          </form>)
      }} />
  </div>);
};

EditTaskForm.propTypes = {
  taskId: PropTypes.string,
  className: PropTypes.string
}

export default EditTaskForm;
