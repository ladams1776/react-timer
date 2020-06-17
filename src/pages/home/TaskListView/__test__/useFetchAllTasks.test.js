import { renderHook } from '@testing-library/react-hooks';
import useFetchAllTasks from '../useFetchAllTasks';
import fetchApiData from 'utils/api/fetchApiData';
import useLoadinSpinnerContext from 'hooks/useLoadinSpinnerContext';

jest.mock('hooks/useLoadinSpinnerContext');
jest.mock('utils/api/fetchApiData');

describe('src/pages/home/TaskListView/__test__/useFetchAllTasks.test.js', () => {
  describe('useFetchAllTasks', () => {
    // Arrange
    const loadinSpinnerContext = {
      setIsLoadin: jest.fn(),
    };

    beforeEach(() => {
      useLoadinSpinnerContext.mockReturnValue(loadinSpinnerContext);
      fetchApiData.mockReturnValue();
    });

    it('should update task with data, with _id will set Success Flash Message', () => {
      // Arrange
      const setTasks = jest.fn();

      // Act
      const { result } = renderHook(() => useFetchAllTasks(setTasks));
      //   result.current(expected);

      // Assert
      expect(loadinSpinnerContext.setIsLoadin).toBeCalledTimes(2);
      expect(loadinSpinnerContext.setIsLoadin).toBeCalledWith(true);
      expect(loadinSpinnerContext.setIsLoadin).toBeCalledWith(false);
      expect(fetchApiData).toHaveBeenNthCalledWith(1, 'tasks', {}, setTasks);
    });
  });
});
