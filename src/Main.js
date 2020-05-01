import React, { useState, useCallback } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { useFetchProjectOptions } from 'hooks';
import { LoadinSpinner, FlashMessage } from 'components';
import IndexPage from 'pages/home/IndexPage';
import TagsPage from 'pages/tags/TagsPage';
import CreateOrEditTaskPage from 'pages/createOrEditTask/CreateOrEditTaskPage';
import TaskEditFormContextProvider from './contexts/TaskEditFormContext';
import LoadinSpinnerContextProvider from './contexts/LoadinSpinnerContext';
import FlashMessageContextProvider from './contexts/FlashMessageContext';
import './Main.css';

const Main = () => {

  return (
    <FlashMessageContextProvider>
      <LoadinSpinnerContextProvider>
        <TaskEditFormContextProvider>
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
        </TaskEditFormContextProvider>
      </LoadinSpinnerContextProvider>
    </FlashMessageContextProvider>
  );
};

export default Main;
