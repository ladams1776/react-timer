import React from 'react';
import cn from 'classnames';
import PropType from 'prop-types';
import { useBrowserHistory, useGetProjectOptionLabel } from 'hooks';
import DeleteTaskButton from './DeleteTaskButton/DeleteTaskButton';
import { getFormattedDate, displayMsInFractionalHourFormat } from 'utils';
import styles from './Task.module.css';

const Task = ({ _id, description = '', contractId, time, date, tags, selectedId }) => {
  const { push } = useBrowserHistory();
  const title = description.split("\n")[0];
  const projectOptionLabel = useGetProjectOptionLabel(contractId);
  const isSelected = selectedId === _id;
  console.log('---------------v')
  console.log('_id: ', _id);
  console.log('selected: ', selectedId);
  console.log('---------------^')


  return (
    <div className={cn(styles.taskItem, { [styles.selected]: isSelected })}>
      <div
        className={styles.taskItemLeft}
        onClick={() => {
          sessionStorage.setItem('LOCATION', `/${_id}`);
          push(`/${_id}`);
          window.location.reload();
        }}
      >
        <div
          className={styles.taskItemDescription, { [styles.selected]: selectedId == _id }}
          dangerouslySetInnerHTML={{ __html: title }}
        />

      </div>
      <DeleteTaskButton taskId={_id} />
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
