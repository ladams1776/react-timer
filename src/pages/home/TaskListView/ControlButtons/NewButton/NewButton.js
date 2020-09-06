import React from 'react';
import { fetchApiData } from 'utils';
import { useBrowserHistory } from 'hooks';
import { Button } from 'components';
import hydrateTaskForm from '../../../TaskForm/hooks/useSubmit/hydrateTaskForm';
import styles from './NewButton.module.css';

const NewButton = () => {
  const { push } = useBrowserHistory();

  return <Button className={styles.buttonAdd} data-test-id="btn-new"
    onClick={() => {
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

      // window.location.reload();
    }}>
    <span className="glyphicon glyphicon-edit" />
  </Button>
};

export default NewButton;