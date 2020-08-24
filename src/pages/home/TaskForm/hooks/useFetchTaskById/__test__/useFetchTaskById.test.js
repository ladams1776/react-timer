import { renderHook, act } from '@testing-library/react-hooks';
import useLoadinSpinnerContext from 'hooks/useLoadinSpinnerContext';
import fetchApiData from 'utils/api/fetchApiData/fetchApiData';
import useFetchTaskById from '../useFetchTaskById';
import useTimeContext from '../../useTimeContext';

jest.mock('hooks/useLoadinSpinnerContext');
jest.mock('utils/api/fetchApiData/fetchApiData');
jest.mock('../../useTimeContext');

describe('src/hooks/__test__/useFetchTaskById.test.js', () => {
  describe('#useFetchTaskById', () => {
    // Arrange
    const useTimeContextStub = {
      setTime: jest.fn(),
    };
    const useLoadinSpinnerContextStub = {
      setIsLoadin: jest.fn(),
    };

    const dispatch = jest.fn();

    beforeEach(() => {
      fetchApiData.mockReset();
      dispatch.mockReset();
      useTimeContextStub.setTime.mockReset();
      useTimeContext.mockReturnValue(useTimeContextStub);
      useLoadinSpinnerContextStub.setIsLoadin.mockReset();
      useLoadinSpinnerContext.mockReturnValue(useLoadinSpinnerContextStub);
    });

    it("should call fetchApiData, when taskId is anything but '-1'", async () => {
      // Arrange
      const taskId = 1;
      const data = {
        _id: 1,
        contractId: 1,
        tags: [1],
        description: 1,
        time: 1,
      };
      fetchApiData.mockReturnValue((a, b, c) => {
        return c(data);
      });
      
      // Act
      const { result } = renderHook(() => useFetchTaskById(taskId, dispatch));
      await act(async () => result.current);

      // Assert
      expect(useLoadinSpinnerContextStub.setIsLoadin).toHaveBeenCalledWith(
        true,
      );
      expect(fetchApiData).toHaveBeenNthCalledWith(
        1,
        `task/${taskId}`,
        {},
        expect.anything(),
      );
      expect(useLoadinSpinnerContextStub.setIsLoadin).toHaveBeenNthCalledWith(
        1,
        true,
      );

      expect(dispatch).not.toBeCalled();
    });

    it("should not call fetchApiData(), when taskId is '-1'", async () => {
      // Arrange
      const taskId = '-1';

      // Act
      const { result } = renderHook(() => useFetchTaskById(taskId, dispatch));
      await act(async () => result.current);

      // Assert
      expect(useLoadinSpinnerContextStub.setIsLoadin).toHaveBeenCalledWith(
        true,
      );
      expect(fetchApiData).not.toBeCalled();
      expect(dispatch).toHaveBeenNthCalledWith(1, { time: 0 });
      expect(useLoadinSpinnerContextStub.setIsLoadin).toHaveBeenCalledWith(
        false,
      );
      expect(useLoadinSpinnerContextStub.setIsLoadin).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, { time: 0 });
    });
  });
});
