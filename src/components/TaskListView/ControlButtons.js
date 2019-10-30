// @TODO: Left off here moving the 3 buttons from TaskListView over into this component
// @TODO: Then we want to control when to display the other 2 buttons
// @TODO: Based on if there are any tasks. So we might be pushing Tasks into the context as well and
// @TODO: Creating a new context or adding to the existing one.
import React from "react";
import { NavLink } from "react-router-dom";
import FileSaver from "file-saver";
import "./TaskListView.css";
import JsonWriter from "./JsonWriter";
import useTaskEditContext from "../../Form/EditTask/useTaskEditContext";

import { getFormattedDate } from "../../utils/DateFormat";

export const updateTaskToWriteToFile = (task, projects) => {
  const taskWithProject = { ...task };

  taskWithProject.time = (task.time / 1000 / 60 / 60).toFixed(2);

  projects.forEach(project => {
    if (taskWithProject.contractId === project.key) {
      taskWithProject.contract = project.contract;
      taskWithProject.customer = project.customer;
    }
  });

  return taskWithProject;
};

export const writeJsonFile = taskBundle => {
  let json = JSON.stringify(taskBundle);
  let blob = new Blob([json], { type: "application/json" });

  let fileName =
    new Date().toString() +
    "_" +
    taskBundle.description +
    "_" +
    taskBundle.time +
    ".json";

  FileSaver.saveAs(blob, fileName);
};

const ControlButtons = () => {
  const { setMessage, projects, tasks, updateTasks } = useTaskEditContext();

  const handleDownload = () => {
    const date = new Date();
    const dateFormatted = getFormattedDate(date);

    const timeTask = {
      date: dateFormatted
    };

    const tasksWithProjects = tasks.map(task =>
      updateTaskToWriteToFile(task, projects)
    );

    timeTask.WorkUnit = tasksWithProjects;

    writeJsonFile(timeTask);
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
      .then(
        setTimeout(() => {
          updateTasks([]);
          setMessage("Successfully deleted all tasks");
        }, 500)
      );
  };

  return (
    <div className="task-list__header">
      {!tasks?.length || (
        <button
          type="a"
          className="button-delete"
          onClick={handleDelete}
          data-test-id="btn-delete"
        >
          <span className="glyphicon glyphicon-remove mr-5px"></span>
          Delete
        </button>
      )}
      {!tasks?.length || (
        <button
          type="a"
          className="button-download"
          onClick={handleDownload}
          data-test-id="btn-download"
        >
          <span className="glyphicon glyphicon-download-alt mr-5px"></span>
          Download
        </button>
      )}
      <NavLink to={"/task/-1"} className="button-add" data-test-id="btn-new">
        <span className="glyphicon glyphicon-plus mr-5px" />
        New Task
      </NavLink>
    </div>
  );
};

export default ControlButtons;
