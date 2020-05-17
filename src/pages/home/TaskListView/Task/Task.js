import React from 'react';
import PropType from 'prop-types';
import { NavLink } from 'react-router-dom';
import DeleteTaskButton from './DeleteTaskButton/DeleteTaskButton';
import { useGetProjectOptionLabel } from 'hooks';
import { getFormattedDate, displayMsInFractionalHourFormat } from 'utils';
import style from './Task.module.css';

const MAX_DESCRIPTION_LINE = 9;

const Task = ({ _id, description = '', contractId, time, date, tags }) => {
  const projectOptionLabel = useGetProjectOptionLabel(contractId);
  const displayableDescription = description
    .split('\n')
    .filter((line, index) => index < MAX_DESCRIPTION_LINE)
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);

  return (
    <NavLink to={'/task/' + _id} id={_id} className={style.taskItem}>
      <div className={style.taskItemLeft}>
        <div className={style.taskItemDescription}>{displayableDescription}</div>
        <span className={style.taskItemCustomer}>{projectOptionLabel}</span>
        <div className={style.taskItemDateTime}>
          <span className={style.block}>Date: {getFormattedDate(date)}</span>
          <span className={style.block}>
            Hours: {displayMsInFractionalHourFormat(time)}
          </span>
          <div className={style.block} >
            {/* //@TODO: Could make tag colors customizeable 🤷‍♂️ */}
            {/* //@TODO: Come back through and do something like taskID+_+tagID */}
            {tags.map(tag => {
              return <span className={style.tag} key={Math.random()}>
                {tag.name}
              </span>
            })}
          </div>
        </div>
      </div>
      <DeleteTaskButton taskId={_id} />
    </NavLink>
  );
};

Task.PropType = {
  _id: PropType.string,
  description: PropType.string,
  contractId: PropType.number,
  time: PropType.number,
  date: PropType.string,
  tags: PropType.arrayOf.object
};

export default Task;
