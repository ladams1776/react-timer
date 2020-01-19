import React, { useState, useCallback } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { useFetchProjectOptions } from 'hooks';
import { TaskEditFormProvider } from './TaskEditFormContext';
import CreateOrEditTaskPage from 'pages/CreateOrEditTask/CreateOrEditTaskPage';
import IndexPage from 'pages/home/IndexPage';
import FlashMessage from 'components/FlashMessage/FlashMessage';
import './Main.css';

const Main = () => {
  const [task, setTask] = useState({});
  const [tasks, setTasks] = useState([]);
  const [taskId, setTaskId] = useState(-1);
  const [description, setDescription] = useState('');
  const [time, setTime] = useState(0);
  const [selectedProject, setSelectedProject] = useState(0);
  const [message, setMessage] = useState(null);
  const projects = useFetchProjectOptions();

  return (
    <TaskEditFormProvider
      value={{
        taskId,
        description,
        time,
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
        updateTime: time => {
          setTime(time);
        },
        updateDropDown: useCallback(selectedProject => {
          setSelectedProject(selectedProject);
        }, []),
        setMessage: useCallback(message => {
          setMessage(message);
        }, [])
      }}
    >
      <HashRouter>
        <div>
          <div className="content">
            <FlashMessage />
            <Route
              exact
              path="/task/:id"
              render={props => <CreateOrEditTaskPage {...props} />}
            />

            <Route exact path="/" render={props => <IndexPage {...props} />} />
          </div>
        </div>
      </HashRouter>
    </TaskEditFormProvider>
  );
};

export default Main;
