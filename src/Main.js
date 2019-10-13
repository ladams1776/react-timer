import React, { useState } from "react";
import { TaskEditFormProvider } from "./TaskEditFormContext";

import { Route, HashRouter } from "react-router-dom";
import TaskListView from "./components/TaskListView/TaskListView";
import EditTaskForm from "./Form/EditTask/EditTaskForm";

const Main = ({ dropDownListContracts }) => {
  const [taskId, setTaskId] = useState(-1);
  const [description, setDescription] = useState("");
  const [time, setTime] = useState(0);
  const [selectedProject, setSelectedProject] = useState(0);
  const [isFlashMessageShowing, setIsFlashMessageShowing] = useState(0);

  return (
    <TaskEditFormProvider
      value={{
        taskId,
        description,
        time,
        selectedProject,
        isFlashMessageShowing,
        dropDownListContracts,
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
        updateFlashMessage: isVisible => {
          setIsFlashMessageShowing(isVisible);
        }
      }}
    >
      <HashRouter>
        <div>
          <div className="content">
            {/* @todo: need to manage the state here, if we click on a link we need to hide the list, the edit form is showing */}

            <Route
              exact
              path="/task/:id"
              render={props => (
                <EditTaskForm {...props} list={dropDownListContracts} />
              )}
            />

            <Route
              exact
              path="/"
              render={props => (
                <TaskListView {...props} list={dropDownListContracts} />
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
