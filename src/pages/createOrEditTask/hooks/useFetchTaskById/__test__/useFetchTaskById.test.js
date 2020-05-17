import { renderHook, act } from '@testing-library/react-hooks';
import useFetchTaskById from '../useFetchTaskById';
import useLoadinSpinnerContext from 'hooks/useLoadinSpinnerContext';
import fetchApiData from 'utils/api/fetchApiData';
var taskIdDispatch = require('../../../form/taskIdDispatch');

jest.mock('hooks/useLoadinSpinnerContext');
jest.mock('utils/api/fetchApiData');

describe('src/hooks/__test__/useFetchTaskById.test.js', () => {
  describe('#useFetchTaskById', () => {

    // Arrange
    const useLoadinSpinnerContextStub = {
      setIsLoadin: jest.fn().mockImplementation(),
    }

    const dispatch = jest.fn();

    beforeEach(() => {
      fetchApiData.mockReset();
      dispatch.mockReset();
      useLoadinSpinnerContextStub.setIsLoadin.mockReset();
      useLoadinSpinnerContext.mockReturnValue(useLoadinSpinnerContextStub);
    });

    it("should call fetchApiData, when taskId is anything but '-1'", async () => {
      // Arrange
      const taskId = 1;

      // Act
      const { result } = renderHook(() => useFetchTaskById(taskId, dispatch));
      await act(async () => result.current);

      // Assert
      expect(useLoadinSpinnerContextStub.setIsLoadin).toHaveBeenCalledWith(true);
      expect(fetchApiData).toHaveBeenNthCalledWith(1, `task/${taskId}`, {}, dispatch);
      expect(useLoadinSpinnerContextStub.setIsLoadin).toHaveBeenCalledWith(false);
      expect(useLoadinSpinnerContextStub.setIsLoadin).toHaveBeenCalledTimes(2);
    });

    it("should not call fetchApiData(), when taskId is '-1'", async () => {
      // Arrange
      const taskId = '-1';

      // Act
      const { result } = renderHook(() => useFetchTaskById(taskId, dispatch));
      await act(async () => result.current);

      // Assert
      expect(useLoadinSpinnerContextStub.setIsLoadin).toHaveBeenCalledWith(true);
      expect(fetchApiData).not.toBeCalled();
      expect(dispatch).toHaveBeenNthCalledWith(1, { time: 0 });
      expect(useLoadinSpinnerContextStub.setIsLoadin).toHaveBeenCalledWith(false);
      expect(useLoadinSpinnerContextStub.setIsLoadin).toHaveBeenCalledTimes(2);
    });
  });
});
