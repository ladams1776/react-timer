import React, { useState, useCallback } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { useFetchProjectOptions } from 'hooks';
import { LoadinSpinner, FlashMessage } from 'components';
import IndexPage from 'pages/home/IndexPage';
import TagsPage from 'pages/tags/TagsPage';
import CreateOrEditTaskPage from 'pages/createOrEditTask/CreateOrEditTaskPage';
import { TaskEditFormProvider } from './contexts/TaskEditFormContext';
import LoadinSpinnerContextProvider from './contexts/LoadinSpinnerContext';
import FlashMessageContextProvider from './contexts/FlashMessageContext';
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
    <FlashMessageContextProvider>
      <LoadinSpinnerContextProvider>
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
            //@TODO: Replace all consumers of this.
            setMessage: useCallback(message => {
              setMessage(message);
            }, []),
          }}
        >
          <HashRouter>
            <div className="content">
              <FlashMessage />
              {/* @TODO: Left off here https://www.telerik.com/blogs/how-to-use-context-api-with-hooks-efficiently-while-avoiding-performance-bottlenecks */}
              <Route
                exact
                path="/task/:id"
                render={props => <CreateOrEditTaskPage {...props} />}
              />
              <Route exact path="/" render={props => <IndexPage {...props} />} />
              <Route exact path="/tags/" render={props => <TagsPage {...props} />} />
              <LoadinSpinner />
            </div>
          </HashRouter>
        </TaskEditFormProvider>
      </LoadinSpinnerContextProvider>
    </FlashMessageContextProvider>
  );
};

export default Main;
