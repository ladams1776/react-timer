import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./TaskListView.css";
import JsonWriter from "./JsonWriter";
import Task from "./Task";
import { getFormattedDate } from "../../utils/DateFormat";

const TaskListView = ({ list }) => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    fetch(`/api/tasks`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.length >= 1) {
          let tasks = data.map(task => {
            return (
              <div key={task._id}>
                <Task task={task} list={list} />
              </div>
            );
          });
          setTasks(tasks);
        }
      });
  }, []);

  const handleDownload = () => {
    fetch(`/api/tasks`)
      .then(response => response.json())
      .then(tasks => {
        const date = new Date();
        const dateFormatted = getFormattedDate(date);

        const timeTask = {
          date: dateFormatted
        };

        tasks.forEach(function(task) {
          task.time = (task.time / 1000 / 60 / 60).toFixed(2);

          list.forEach(function(existingTask) {
            if (task.contractId === existingTask.key) {
              task.contract = existingTask.contract;
              task.customer = existingTask.customer;
            }
          });
        });

        timeTask.WorkUnit = tasks;

        const writer = new JsonWriter();
        writer.write(timeTask);
      });
  };

  /**
   * Setting a timeout when reloading, because I think the reloading is happening too fast.
   */
  const handleDelete = e => {
    e.preventDefault();
    fetch(`/api/tasks`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(setTimeout(() => window.location.reload(), 500));
  };

  const showDownloadButton = () => {
    if (tasks !== null) {
      return (
        <a href="#" className="button-download" onClick={handleDownload}>
          <span className="glyphicon glyphicon-download-alt mr-5px"></span>
          Download
        </a>
      );
    }
  };

  const showDeleteButton = () => {
    if (tasks !== null) {
      return (
        <a href="#" className="button-delete" onClick={handleDelete}>
          <span className="glyphicon glyphicon-remove mr-5px"></span>Delete
        </a>
      );
    }
  };

  return (
    <div>
      <div className="task-list__header">
        {showDeleteButton()}
        {showDownloadButton()}
        <NavLink to={"/task/-1"} className="button-add">
          <span className="glyphicon glyphicon-plus mr-5px" />
          New Task
        </NavLink>
      </div>
      <ul>{tasks}</ul>
    </div>
  );
};

TaskListView.propTypes = {
  tasks: PropTypes.array,
  list: PropTypes.array
};

export default TaskListView;
