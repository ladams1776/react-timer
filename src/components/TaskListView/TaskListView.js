import React, { useEffect, useState } from "react";
import "./TaskListView.css";
import Task from "./Task/Task";
import ControlButtons from "./ControlButtons";

const TaskListView = () => {
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
                  <Task task={task} />
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
      <ControlButtons haveTasks={!!tasks?.length} setTasks={setTasks} />
      <ul>{tasks}</ul>
    </div>
  );
};

export default TaskListView;
