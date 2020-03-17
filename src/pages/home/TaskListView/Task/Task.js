import React from 'react';
import PropType from 'prop-types';
import { NavLink } from 'react-router-dom';
import DeleteTaskButton from './DeleteTaskButton';
import { useGetProjectOptionLabel } from 'hooks';
import { getFormattedDate, displayMsInFractionalHourFormat } from 'utils';
import './Task.css';

const MAX_DESCRIPTION_LINE = 9;

const Task = ({ task }) => {
  const { _id, description = '', contractId, time, date } = task;
  const projectOptionLabel = useGetProjectOptionLabel(contractId);
  const displayableDescription = description
    .split('\n')
    .filter((line, index) => index < MAX_DESCRIPTION_LINE)
    .map((paragraph, index) => <p>{paragraph}</p>);

  return (
    <NavLink to={'/task/' + _id} id={_id} className="task-item">
      <div className="task-item__left">
        <div className="task-item__description">{displayableDescription}</div>
        <span className="task-item__customer">{projectOptionLabel}</span>
        <div className="task-item__date-time">
          <span className="block">Date: {getFormattedDate(date)}</span>
          <span className="block">
            Hours: {displayMsInFractionalHourFormat(time)}
          </span>
        </div>
      </div>
      <DeleteTaskButton taskId={_id} />
    </NavLink>
  );
};

Task.PropType = {
  task: PropType.object,
};

export default Task;
