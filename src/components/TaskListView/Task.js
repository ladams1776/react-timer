import React from "react";
import { NavLink } from "react-router-dom";
import { getFormattedDate } from "../../utils/DateFormat";
import "./Task.css";

const Task = props => {
  const state = {
    task: this.props.task,
    existingTasks: this.props.existingTasks
  };

  const _onClick = e => {
    e.preventDefault();
    fetch(`/api/task/${this.state.task._id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(setTimeout(() => window.location.reload(), 500));
  };

  return (
    <li key={this.state.task._id}>
      <NavLink
        to={"/task/" + this.state.task._id}
        id={this.state.task._id}
        className="task-item"
      >
        <div className="task-item__left">
          <div className="task-item__description">
            {this.state.task.description.split("\n").map((paragraph, index) => {
              return (
                <p key={index} className="task-item__description-item">
                  {paragraph}
                </p>
              );
            })}
          </div>
          <span className="task-item__customer">
            {this.state.existingTasks[this.state.task.contractId].label}
          </span>{" "}
          -{" "}
          <span className="task-item__contract">
            {this.state.existingTasks[this.state.task.contractId].customer}
          </span>
        </div>

        <span className="task-item__time">
          <span className="task-item__time-label">Time:</span>
          <span className="task-item__time-value">
            {" "}
            {(this.state.task.time / 1000 / 60 / 60).toFixed(2)}
            <button
              onClick={_onClick}
              className="task-item__delete-btn glyphicon glyphicon-remove"
            />
          </span>
          <span className="task-item__item-date">
            {getFormattedDate(this.state.task.date)}
          </span>
        </span>
      </NavLink>
    </li>
  );
};

export default Task;
