import React, { useEffect, useState } from "react";
import PropTypes, { array } from "prop-types";
import "./TaskListView.css";
import Task from "./Task/Task";
import ControlButtons from "./ControlButtons";

const TaskListView = ({ list }) => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    fetch(`/api/tasks`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.length >= 1) {
          setTasks(
            data.map(task => {
              return (
                <div key={task._id}>
                  <Task task={task} list={list} />
                </div>
              );
            })
          );
        }
      })
      .catch(e => {});
  }, [tasks]);

  return (
    <div>
      <ControlButtons list={list} tasks={tasks} setTasks={setTasks} />
      <ul>{tasks}</ul>
    </div>
  );
};

TaskListView.propTypes = {
  list: PropTypes.array
};

export default TaskListView;
