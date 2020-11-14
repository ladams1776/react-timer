import React from 'react';
import cn from 'classnames';
import { fetchApiData } from 'utils';
import { useBrowserHistory } from 'hooks';
import { Button } from 'components';
import hydrateTaskForm from '../../../TaskForm/hooks/useSubmit/hydrateTaskForm';
import styles from './NewButton.module.css';

/**
 * We will create a new task before we start working on the note.
 *
 * @param {Function} push function to the next url
 */
const createNewTask = push => () => {
  const initialTask = {
    id: -1,
    description: '',
    tags: [],
    project: 0,
    time: 0,
  };

  const emptyTask = hydrateTaskForm({ id: -1 }, [], initialTask);
  const dispatch = data => {
    push(`/task/${data._id}`);
    window.location.reload();
  }

  fetchApiData('task', { body: emptyTask, method: 'POST' }, dispatch);
};

const NewButton = () => {
  const { push } = useBrowserHistory();
  const addNewTask = createNewTask(push);

  return <Button data-test-id="btn-new"
    className={cn(styles.buttonAdd, "glyphicon glyphicon-edit")}
    title="New Task"
    onClick={addNewTask} />
};

export default NewButton;