import { renderHook } from '@testing-library/react-hooks';
import { fetchApiData, getFormattedDate } from 'utils';
import { useTagContext, useTimeContext, useFormDispatch } from '../..';
import hydrateTaskForm from '../hydrateTaskForm';
import useSubmit from '../useSubmit';

jest.mock('utils/api/fetchApiData/fetchApiData');
jest.mock('utils/formatters/getFormattedDate');
jest.mock('../../useTimeContext');
jest.mock('../../useTagContext');
jest.mock('../../useFormDispatch');
jest.mock('../hydrateTaskForm');

describe('src/pages/createOrEditTask/hooks/__test__/useSubmit.test.js', () => {
  describe('useSubmit', () => {
    // Arrange
    const dispatchSpy = jest.fn();
    const tagContextMock = {
      tags: [{ id: 1000 }],
    };
    const timeContextMock = {
      time: 1000,
    };
    const timeTask = {
      _id: 123,
    };
    const state = {
      id: 1,
      project: 1,
      tags: [1],
      description: 1,
    };
    const expected = {
      project: state.project,
      dateFormatted: getFormattedDate(new Date()),
      time: timeContextMock.time,
      tagSelectedOption: state.tags,
      description: state.description,
    };

    hydrateTaskForm.mockReturnValue(timeTask);

    beforeEach(() => {
      dispatchSpy.mockReset();
      fetchApiData.mockReset();
      hydrateTaskForm.mockReset();

      useFormDispatch.mockReturnValue(dispatchSpy);
      useTagContext.mockReturnValue(tagContextMock);
      useTimeContext.mockReturnValue(timeContextMock);
      hydrateTaskForm.mockReturnValue(timeTask);
    });

    it('should fetchApiData with all the necessary pieces, and a method with PUT, when event has an id.', () => {
      // Arrange
      const expectedMethod = 'PUT';

      // Act
      const { result } = renderHook(() =>
        useSubmit(state, state.tags, dispatchSpy),
      );
      result.current();

      // Assert
      expect(hydrateTaskForm).toHaveBeenNthCalledWith(
        1,
        state,
        state.tags,
        expected,
      );

      expect(fetchApiData).toHaveBeenNthCalledWith(
        1,
        'task',
        { body: timeTask, method: expectedMethod },
        dispatchSpy,
      );
    });

    it('should fetchApiData with all the necessary pieces, and a method with POST, when event has no id.', () => {
      // Arrange
      state.id = undefined;
      const expectedMethod = 'POST';

      // Act
      const { result } = renderHook(() =>
        useSubmit(state, state.tags, dispatchSpy),
      );
      result.current();

      // Assert
      expect(hydrateTaskForm).toHaveBeenNthCalledWith(
        1,
        state,
        state.tags,
        expected,
      );

      expect(fetchApiData).toHaveBeenNthCalledWith(
        1,
        'task',
        { body: timeTask, method: expectedMethod },
        dispatchSpy,
      );
    });
  });
});
