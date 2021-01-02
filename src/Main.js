import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import LoadinSpinnerContextProvider from 'contexts/LoadinSpinnerContext';
import TaskEditFormContextProvider from './pages/tasks/contexts/TaskEditFormContext';
import FlashMessageContextProvider from 'contexts/FlashMessageContext';
import { LoadinSpinner, FlashMessage } from 'components';
import TagPage from 'pages/tags/TagPage';
import TaskPage from 'pages/tasks/TaskPage';
import './Main.css';

const Main = () => {
  return (
    <FlashMessageContextProvider>
      <LoadinSpinnerContextProvider>
        <TaskEditFormContextProvider>
          <HashRouter>
            <div className="content">
              <FlashMessage />
              <Route exact path={["/", "/task/:id"]} render={props => <TaskPage {...props} />} />
              <Route exact path={["/tag", "/tag/:id", "/tags"]} render={props => <TagPage {...props} />} />
              <LoadinSpinner />
            </div>
          </HashRouter>
        </TaskEditFormContextProvider>
      </LoadinSpinnerContextProvider>
    </FlashMessageContextProvider>
  );
};

export default Main;
