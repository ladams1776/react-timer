import React from "react";
import PropType from "prop-types";
import { NavLink } from "react-router-dom";
import { getFormattedDate } from "../../utils/DateFormat";
import "./Task.css";

const Task = ({ task, existingTasks }) => {
  const _onClick = e => {
    e.preventDefault();
    fetch(`/api/task/${task._id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(setTimeout(() => window.location.reload(), 500));
  };

  return (
    <li key={task._id}>
      <NavLink to={"/task/" + task._id} id={task._id} className="task-item">
        <div className="task-item__left">
          <div className="task-item__description">
            {task.description.split("\n").map((paragraph, index) => {
              return (
                <p key={index} className="task-item__description-item">
                  {paragraph}
                </p>
              );
            })}
          </div>
          <span className="task-item__customer">
            {existingTasks[task.contractId].label}
          </span>{" "}
          -{" "}
          <span className="task-item__contract">
            {existingTasks[task.contractId].customer}
          </span>
        </div>

        <span className="task-item__time">
          <span className="task-item__time-label">Time:</span>
          <span className="task-item__time-value">
            {" "}
            {(task.time / 1000 / 60 / 60).toFixed(2)}
            <button
              onClick={_onClick}
              className="task-item__delete-btn glyphicon glyphicon-remove"
            />
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
  task: PropType.object,
  existingTasks: PropType.arrayOf.object
};

export default Task;
