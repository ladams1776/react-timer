import React from 'react';
import PropType from 'prop-types';
import { useBrowserHistory, useGetProjectOptionLabel } from 'hooks';
import DeleteTaskButton from './DeleteTaskButton/DeleteTaskButton';
import { getFormattedDate, displayMsInFractionalHourFormat } from 'utils';
import style from './Task.module.css';

const Task = ({ _id, description = '', contractId, time, date, tags }) => {
  const { push } = useBrowserHistory();
  const projectOptionLabel = useGetProjectOptionLabel(contractId);
  return (
    <div className={style.taskItem}>
      <div
        className={style.taskItemLeft}
        onClick={() => {
          sessionStorage.setItem('LOCATION', `/task/${_id}`);
          push(`/task/${_id}`);
        }}
      >
        <div
          className={style.taskItemDescription}
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <span className={style.taskItemCustomer}>{projectOptionLabel}</span>
        <div className={style.taskItemDateTime}>
          <span className={style.block}>Date: {getFormattedDate(date)}</span>
          <span className={style.block}>
            Hours: {displayMsInFractionalHourFormat(time)}
          </span>
          <div className={style.block}>
            {/* //@TODO: Could make tag colors customizeable 🤷‍♂️ */}
            {/* //@TODO: Come back through and do something like taskID+_+tagID */}
            {tags.map(tag => {
              return (
                <span className={style.tag} key={`${_id}_${tag._id}`}>
                  {tag.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <DeleteTaskButton taskId={_id} />
    </div>
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
