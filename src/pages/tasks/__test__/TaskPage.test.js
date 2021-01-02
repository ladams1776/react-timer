import React, { useState, useMemo } from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

// import target
import TaskPage from '../TaskPage';

// import target dependencies
import { useSetCurrentLocation } from 'hooks';
import useFetchAllTasks from 'pages/tasks/hooks/useFetchAllTasks';
import useTaskRefs from '../hooks/useTaskRefs';

// mock hooks
jest.mock('hooks/useSetCurrentLocation');
jest.mock('../hooks/useTaskRefs');
jest.mock('pages/tasks/hooks/useFetchAllTasks');

// mock components
jest.mock('../TaskListView/TaskListView', () => () => <div>TaskListView</div>);
jest.mock('../TaskListView/ControlButtons/ControlButtons', () => () => (<div>ControlButtons</div>));
jest.mock('../TaskForm/form/AddTaskForm', () => () => (<div>AddTaskForm</div>));

  describe('TaskPage', () => {
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
      const { queryByTestId } = render(<TaskPage match={match} />);

      // Assert
      expect(useSetCurrentLocation).toBeCalledWith(`/task/${match.params.id}`);
      expect(useFetchAllTasks).toBeCalledWith(setTasks);
      expect(useTaskRefs).toBeCalledWith([{ id: 1 }]);
      expect(queryByTestId('container').getElementsByClassName("addTaskForm")).toBeTruthy();
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
      const { queryByTestId } = render(<TaskPage match={match} />);

      // Assert
      expect(useSetCurrentLocation).toBeCalledWith('/task/undefined');
      expect(useFetchAllTasks).toBeCalledWith(setTasks);
      expect(useTaskRefs).toBeCalledWith([]);
      expect(JSON.stringify(queryByTestId('container').getElementsByClassName("addTaskForm"))).toEqual(JSON.stringify({}));
    });
  });
