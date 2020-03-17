import { renderHook, act } from '@testing-library/react-hooks';
import useFetchTaskById from '../useFetchTaskById';
import useTaskEditContext from 'hooks/useTaskEditContext';
jest.mock('hooks/useTaskEditContext');

describe('src/hooks/__test__/useFetchTaskById.test.js', () => {
  describe('#useFetchTaskById', () => {
    it("should call fetch, when taskId is anything but '-1'", async () => {
      const task = {
        time: 1000,
      };

      const responsePromise = Promise.resolve({
        json: jest.fn().mockImplementation(() => Promise.resolve(task)),
      });

      global.fetch = jest.fn().mockImplementation(() => responsePromise);
      const setTimeSpy = jest.fn();
      const taskId = 1;
      const useTaskEditContextStub = {
        updateTask: jest.fn(),
      };

      useTaskEditContext.mockReturnValue(useTaskEditContextStub);

      const { result } = renderHook(() => useFetchTaskById(taskId, setTimeSpy));

      await act(async () => result.current);

      expect(setTimeSpy).toBeCalledWith(task.time);
      expect(useTaskEditContextStub.updateTask).toBeCalledWith(task);
    });

    it("should not call fetch(), when taskId is '-1'", async () => {
      const task = {
        time: 1000,
      };

      const responsePromise = Promise.resolve({
        json: jest.fn().mockImplementation(() => Promise.resolve(task)),
      });

      global.fetch = jest.fn().mockImplementation(() => responsePromise);
      const setTimeSpy = jest.fn();
      const taskId = '-1';
      const useTaskEditContextStub = {
        updateTask: jest.fn(),
      };

      useTaskEditContext.mockReturnValue(useTaskEditContextStub);

      const { result } = renderHook(() => useFetchTaskById(taskId, setTimeSpy));

      await act(async () => result.current);

      expect(setTimeSpy).not.toBeCalled();
      expect(useTaskEditContextStub.updateTask).not.toBeCalled();
    });
  });
});
