import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TaskListView from '../TaskListView';

import useTaskEditContext from '../../hooks/useTaskEditContext';

// mock essentials for target
jest.mock('../../hooks/useTaskEditContext');

// mock components
jest.mock('../Task/Task', () => {
  return jest.fn(() => <></>)
});

describe('TaskListView', () => {
  it('should render', () => {
    // Arrange
    const className = 'className';
    const tasks = [{ _id: 'taskId' }];
    const setTasksSpy = jest.fn();
    const refs = tasks;
    const state = {
      id: 'taskId',
      description: 'description'
    };
    useTaskEditContext.mockReturnValue({ state });

    // Act
    const { getByTestId } = render(<TaskListView className={className} tasks={tasks} setTasks={setTasksSpy} refs={refs} />);

    // Assert
    expect(getByTestId('list-view')).toBeInTheDocument();
  });
});
