import React from 'react';
import PropType from 'prop-types';
import { NavLink } from 'react-router-dom';
import DeleteTaskButton from './DeleteTaskButton';
import * as useTaskEditContext from '~/useTaskEditContext';
import getFormattedDate from '../../../utils/DateFormat';
import './Task.css';

const Task = ({ task }) => {
  const { projects } = useTaskEditContext();
  const taskId = task._id;

  return (
    <li key={taskId}>
      <NavLink to={'/task/' + taskId} id={taskId} className="task-item">
        <div className="task-item__left">
          <div className="task-item__description">
            {task.description.split('\n').map((paragraph, index) => {
              return (
                <p
                  key={index}
                  className="task-item__description-item"
                  data-test-id="task-item__description"
                >
                  {paragraph}
                </p>
              );
            })}
          </div>
          <span className="task-item__customer">
            {projects[task.contractId].label}
          </span>{' '}
          -{' '}
          <span className="task-item__contract">
            {projects[task.contractId].customer}
          </span>
        </div>

        <span className="task-item__time">
          <span className="task-item__time-label">Time:</span>
          <span className="task-item__time-value">
            {' '}
            {(task.time / 1000 / 60 / 60).toFixed(2)}
            <DeleteTaskButton taskId={taskId} />
          </span>
          <span className="task-item__item-date">
            {getFormattedDate(task.date)}
          </span>
        </span>
      </NavLink>
    </li>
  );
};

Task.PropType = {
  task: PropType.object
};

export default Task;
