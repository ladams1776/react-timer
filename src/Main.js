import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import LoadinSpinnerContextProvider from 'contexts/LoadinSpinnerContext';
import FlashMessageContextProvider from 'contexts/FlashMessageContext';
import TaskEditFormContextProvider from 'pages/home/contexts/TaskEditFormContext';
import { LoadinSpinner, FlashMessage } from 'components';
import TagPage from 'pages/tags/TagPage';
import CreateOrEditTaskPage from 'pages/home/CreateOrEditTaskPage';
import './Main.css';

const Main = () => {
  return (
    <FlashMessageContextProvider>
      <LoadinSpinnerContextProvider>
        <TaskEditFormContextProvider>
          <HashRouter>
            <div className="content">
              <FlashMessage />
              <Route exact path="/" render={props => <CreateOrEditTaskPage {...props} />} />
              <Route exact path="/task/:id" render={props => <CreateOrEditTaskPage {...props} />} />

              <Route exact path="/tag" render={props => <TagPage {...props} />} />
              <Route exact path="/tag/:id" render={props => <TagPage {...props} />} />
              <Route exact path="/tags" render={props => <TagPage {...props} />} />
              <LoadinSpinner />
            </div>
          </HashRouter>
        </TaskEditFormContextProvider>
      </LoadinSpinnerContextProvider>
    </FlashMessageContextProvider>
  );
};

export default Main;
