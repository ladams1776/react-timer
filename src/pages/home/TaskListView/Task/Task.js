import React from 'react';
import PropType from 'prop-types';
import { NavLink } from 'react-router-dom';
import DeleteTaskButton from './DeleteTaskButton';
import { useFetchProjectOptions } from 'hooks';
import { getFormattedDate, displayMsInFractionalHourFormat } from 'utils';
import './Task.css';

const Task = ({ task }) => {
  const { _id, description = '', contractId, time, date } = task;
  const projectOptions = useFetchProjectOptions();

  return (
    <NavLink to={'/task/' + _id} id={_id} className="task-item">
      <div className="task-item__left">
        <div className="task-item__description">
          {description.split('\n').map((paragraph, index) => {
            return (
              <p key={index} className="task-item__description-item">
                {paragraph}
              </p>
            );
          })}
        </div>
        <span className="task-item__customer">
          {projectOptions[contractId].label}
        </span>
      </div>

      <span className="task-item__time">
        <span className="task-item__time-label">Time:</span>
        <span className="task-item__time-value">
          {' '}
          {displayMsInFractionalHourFormat(time)}
          <DeleteTaskButton taskId={_id} />
        </span>
        <span className="task-item__item-date">
          {getFormattedDate(date)}
        </span>
      </span>
    </NavLink>
  );
};

Task.PropType = {
  task: PropType.object
};

export default Task;
