import { renderHook, act } from '@testing-library/react-hooks';
import { fetchApiData } from 'utils';
import { useLoadinSpinnerContext } from 'hooks';
import useFetchAllTasks from '../useFetchAllTasks';

jest.mock('utils/api/fetchApiData/fetchApiData');
jest.mock('hooks/useLoadinSpinnerContext');

describe('src/pages/tasks/TaskListView/__test__/useFetchAllTasks.test.js', () => {
  describe('useFetchAllTasks', () => {
    // Arrange
    const setTasks = jest.fn();
    const loadinSpinnerContext = {
      setIsLoadin: jest.fn(),
    };

    beforeEach(() => {
      loadinSpinnerContext.setIsLoadin.mockReset();
      useLoadinSpinnerContext.mockReturnValue(loadinSpinnerContext);
      fetchApiData.mockReset();
    });

    it('should call setTasks', () => {
      // Arrange

      // Act
      const { result } = renderHook(() => useFetchAllTasks(setTasks));
      act(() => result.current);

      // Assert
      expect(loadinSpinnerContext.setIsLoadin).toHaveBeenCalledTimes(2);
      expect(loadinSpinnerContext.setIsLoadin).toHaveBeenCalledWith(true);
      expect(fetchApiData).toHaveBeenNthCalledWith(1, 'tasks', {}, setTasks);
      expect(loadinSpinnerContext.setIsLoadin).toHaveBeenCalledWith(false);
    });
  });
});
