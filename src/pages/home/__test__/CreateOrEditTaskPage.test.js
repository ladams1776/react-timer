import React, { useState, useMemo } from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { useSetCurrentLocation } from 'hooks';
import useFetchAllTasks from '../TaskListView/useFetchAllTasks';
import useTaskRefs from '../hooks/useTaskRefs';
import CreateOrEditTaskPage from '../CreateOrEditTaskPage';


jest.mock('hooks/useSetCurrentLocation');
jest.mock('../TaskListView/TaskListView', () => () => <div>TaskListView</div>);
jest.mock('../TaskListView/useFetchAllTasks');
jest.mock('../TaskListView/ControlButtons/ControlButtons', () => () => (<div>ControlButtons</div>));
jest.mock('../TaskForm/form/AddTaskForm', () => () => (<div>AddTaskForm</div>));
jest.mock('../hooks/useTaskRefs');

describe('src/pages/home/__test__/CreateOrEditTaskPage.test.js', () => {
  describe('CreateOrEditTaskPage', () => {
    it('should render Add Task Form if there is a taskId', () => {
      // Arrange
      useSetCurrentLocation.mockImplementation();
      useFetchAllTasks.mockImplementation();
      useTaskRefs.mockImplementation();

      const setTasks = jest.fn();
      const stubInitialState = [[{ id: 1 }], setTasks];
      jest
        .spyOn(React, 'useState')
        .mockImplementationOnce(() => stubInitialState);

      const match = {
        params: {
          id: 1,
        },
      };

      // Act
      const { getByTestId } = render(<CreateOrEditTaskPage match={match} />);

      // Assert
      expect(useSetCurrentLocation).toBeCalledWith(`/task/${match.params.id}`);
      expect(useFetchAllTasks).toBeCalledWith(setTasks);
      expect(useTaskRefs).toBeCalledWith([{ id: 1 }]);
      expect(getByTestId('container').getElementsByClassName("addTaskForm")).toBeTruthy();
    });

    it('should not render Add Task Form if there is no taskId', () => {
      // Arrange
      useSetCurrentLocation.mockImplementation();
      useFetchAllTasks.mockImplementation();
      useTaskRefs.mockImplementation();

      const setTasks = jest.fn();
      const stubInitialState = [[], setTasks];
      jest
        .spyOn(React, 'useState')
        .mockImplementationOnce(() => stubInitialState);

      const match = {};

      // Act
      const { getByTestId } = render(<CreateOrEditTaskPage match={match} />);

      // Assert
      expect(useSetCurrentLocation).toBeCalledWith('/task/undefined');
      expect(useFetchAllTasks).toBeCalledWith(setTasks);
      expect(useTaskRefs).toBeCalledWith([]);
      expect(JSON.stringify(getByTestId('container').getElementsByClassName("addTaskForm"))).toEqual(JSON.stringify({}));
    });
  });
});
