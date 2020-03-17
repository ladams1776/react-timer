import React, { useState, useCallback } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { useFetchProjectOptions } from 'hooks';
import { TaskEditFormProvider } from './TaskEditFormContext';
import IndexPage from 'pages/home/IndexPage';
import CreateOrEditTaskPage from 'pages/createOrEditTask/CreateOrEditTaskPage';
import FlashMessage from 'components/FlashMessage/FlashMessage';
import './Main.css';

const Main = () => {
  const [taskId, setTaskId] = useState(-1);
  const [task, setTask] = useState({});
  const [tasks, setTasks] = useState([]);
  const [description, setDescription] = useState('');
  const [selectedProject, setSelectedProject] = useState(0);
  const [message, setMessage] = useState(null);
  const projects = useFetchProjectOptions();

  return (
    <TaskEditFormProvider
      value={{
        taskId,
        description,
        selectedProject,
        message,
        projects,
        tasks,
        task,
        updateTask: useCallback(task => {
          setTask(task);
        }, []),
        updateTasks: useCallback(tasks => {
          setTasks(tasks);
        }, []),
        updateTaskId: useCallback(taskId => {
          setTaskId(taskId);
        }, []),
        updateDescription: useCallback(description => {
          setDescription(description);
        }, []),
        updateDropDown: useCallback(selectedProject => {
          setSelectedProject(selectedProject);
        }, []),
        setMessage: useCallback(message => {
          setMessage(message);
        }, []),
      }}
    >
      <HashRouter>
        <div className="content">
          <FlashMessage />
          <Route
            exact
            path="/task/:id"
            render={props => <CreateOrEditTaskPage {...props} />}
          />
          <Route exact path="/" render={props => <IndexPage {...props} />} />
        </div>
      </HashRouter>
    </TaskEditFormProvider>
  );
};

export default Main;
