import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useTaskEditContext } from 'hooks';
import { useTimeContext } from '../../hooks';
import taskIdDispatch from '../../form/taskIdDispatch';
import useFetchDispatch from '../useFetchDispatch';

jest.mock('hooks/useTaskEditContext');
jest.mock('../../hooks/useTimeContext');
jest.mock('../../form/taskIdDispatch');

taskIdDispatch.mockImplementation(() => {
  return data => callback(data);
});
React.useCallback = jest.fn(() => taskIdDispatch);

describe('src/pages/createOrEditTask/hooks/__test__/useFetchDispatch.test.js', () => {
  describe('useFetchDispatch', () => {
    // Arrange
    const taskContextMock = {
      updateTask: jest.fn(),
    };
    const timeContextMock = {
      setTime: jest.fn(),
    };

    beforeEach(() => {
      taskContextMock.updateTask.mockReset();
      timeContextMock.setTime.mockReset();

      useTaskEditContext.mockReturnValue(taskContextMock);
      useTimeContext.mockReturnValue(timeContextMock);
    });

    it('should ucall taskIdDispatch with data', () => {
      // Arrange
      const expected = {
        _id: 123,
      };

      // Act
      const { result } = renderHook(() => useFetchDispatch());
      result.current(expected);

      // Assert
      // Feels like I am missing pieces of the test here. useCallback is a pain. 😢
      expect(taskIdDispatch).toHaveBeenNthCalledWith(1, expected);
    });
  });
});
