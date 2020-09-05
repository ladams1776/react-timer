import React from 'react';
import cn from 'classnames';
import PropType from 'prop-types';
import { useBrowserHistory, useGetProjectOptionLabel } from 'hooks';
import DeleteTaskButton from './DeleteTaskButton/DeleteTaskButton';
import styles from './Task.module.css';
import useUpdateWhenLeave from '../../TaskForm/hooks/useSubmit/useUpdateWhenLeave';

const Task = ({ _id, description, contractId, selectedId }) => {
  const { push } = useBrowserHistory();
  const title = description?.split("\n")[0];
  const projectOptionLabel = useGetProjectOptionLabel(contractId);
  const isSelected = selectedId === _id;
  const onDispatchWhenLeave = useUpdateWhenLeave();

  return (
    <div className={styles.taskContainer}>
      <div className={cn(styles.taskItem, { [styles.selected]: isSelected })}>
        <div
          className={styles.taskItemLeft}
          onClick={() => {
            onDispatchWhenLeave();
            sessionStorage.setItem('LOCATION', `/task/${_id}`);
            push(`/task/${_id}`);
            // window.location.reload(); // need to reload, cuz of TextArea.
          }}
        >
          <div
            className={styles.taskItemDescription}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <span className={styles.taskItemCustomer}>{projectOptionLabel}</span>
        </div>
        <DeleteTaskButton taskId={_id} isSelected={isSelected} />
      </div>
      <div className={styles.borderContainer}>
        <div className={cn(styles.underBorder, { [styles.underBorderSelected]: isSelected })} />
      </div>
    </div >
  );
};

Task.PropType = {
  _id: PropType.string,
  description: PropType.string,
  contractId: PropType.number,
  time: PropType.number,
  date: PropType.string,
  tags: PropType.arrayOf.object,
};

export default Task;
