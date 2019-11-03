import React, { useEffect } from "react";
import "./TaskListView.css";
import Task from "./Task/Task";
import ControlButtons from "./ControlButtons";
import * as useTaskEditContext from "~/useTaskEditContext";

const TaskListView = () => {
  const { tasks, updateTasks } = useTaskEditContext();

  useEffect(() => {
    fetch(`/api/tasks`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.length >= 1) {
          updateTasks(data);
        }
      })
      .catch(e => {}); //@TODO: Flash the error
  }, [tasks]);

  return (
    <div>
      <ControlButtons />
      <ul>
        {tasks.map(task => {
          return (
            <div key={task._id}>
              <Task task={task} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskListView;
