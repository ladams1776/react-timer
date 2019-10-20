import React, { useState } from "react";
import { TaskEditFormProvider } from "./TaskEditFormContext";

import { Route, HashRouter } from "react-router-dom";
import TaskListView from "./components/TaskListView/TaskListView";
import EditTaskForm from "./Form/EditTask/EditTaskForm";
import FlashMessage from "./components/FlashMessage/FlashMessage";

const Main = ({ dropDownListContracts }) => {
  const [taskId, setTaskId] = useState(-1);
  const [description, setDescription] = useState("");
  const [time, setTime] = useState(0);
  const [selectedProject, setSelectedProject] = useState(0);
  const [message, setMessage] = useState(null);
  const [projects, setProjects] = useState(dropDownListContracts);

  return (
    <TaskEditFormProvider
      value={{
        taskId,
        description,
        time,
        selectedProject,
        message,
        projects,
        updateTaskId: taskId => {
          setTaskId(taskId);
        },
        updateDescription: description => {
          setDescription(description);
        },
        updateTime: time => {
          setTime(time);
        },
        updateDropDown: selectedProject => {
          setSelectedProject(selectedProject);
        },
        setMessage: isVisible => {
          setMessage(isVisible);
        }
      }}
    >
      <HashRouter>
        <div>
          <div className="content">
            <FlashMessage />
            <Route
              exact
              path="/task/:id"
              render={props => (
                <EditTaskForm {...props} />
              )}
            />

            <Route
              exact
              path="/"
              render={props => (
                <TaskListView {...props} />
              )}
              // component={TaskListView}
            />
          </div>
        </div>
      </HashRouter>
    </TaskEditFormProvider>
  );
};

export default Main;
