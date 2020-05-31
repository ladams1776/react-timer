import { renderHook } from '@testing-library/react-hooks';
import { fetchApiData, getFormattedDate } from 'utils';
import { useTagContext, useTimeContext, useFormDispatch } from '../..';
import hydrateTaskFromEvent from '../hydrateTaskFromEvent';
import useSubmit from '../useSubmit';

jest.mock('utils/api/fetchApiData');
jest.mock('utils/formatters/getFormattedDate');
jest.mock('../../useTimeContext');
jest.mock('../../useTagContext');
jest.mock('../../useFormDispatch');
jest.mock('../hydrateTaskFromEvent');

describe('src/pages/createOrEditTask/hooks/__test__/useSubmit.test.js', () => {
  describe('useSubmit', () => {
    // Arrange
    const dispatchStub = jest.fn();
    const tagContextMock = {
      tags: [{ id: 1000 }],
    };
    const timeContextMock = {
      time: 1000,
    };
    const dateFormatted = getFormattedDate(new Date());

    beforeEach(() => {
      dispatchStub.mockReset();
      fetchApiData.mockReset();
      hydrateTaskFromEvent.mockReset();

      useFormDispatch.mockReturnValue(dispatchStub);
      useTagContext.mockReturnValue(tagContextMock);
      useTimeContext.mockReturnValue(timeContextMock);
    });

    it('should fetchApiData with all the necessary pieces, and a method with PUT, when event has an id.', () => {
      // Arrange
      const event = {
        id: 1,
      };
      const timeTask = {
        _id: 123,
      };
      const expectedMethod = 'PUT';

      hydrateTaskFromEvent.mockReturnValue(timeTask);

      // Act
      const { result } = renderHook(() => useSubmit());
      result.current(event);

      // Assert
      expect(hydrateTaskFromEvent).toHaveBeenNthCalledWith(
        1,
        event,
        dateFormatted,
        timeContextMock.time,
        tagContextMock.tags,
      );

      expect(fetchApiData).toHaveBeenNthCalledWith(
        1,
        'task',
        { body: timeTask, method: expectedMethod },
        dispatchStub,
      );
    });

    it('should fetchApiData with all the necessary pieces, and a method with POST, when event has no id.', () => {
      // Arrange
      const event = {};
      const timeTask = {
        _id: 123,
      };
      const expectedMethod = 'POST';

      hydrateTaskFromEvent.mockReturnValue(timeTask);

      // Act
      const { result } = renderHook(() => useSubmit());
      result.current(event);

      // Assert
      expect(hydrateTaskFromEvent).toHaveBeenNthCalledWith(
        1,
        event,
        dateFormatted,
        timeContextMock.time,
        tagContextMock.tags,
      );

      expect(fetchApiData).toHaveBeenNthCalledWith(
        1,
        'task',
        { body: timeTask, method: expectedMethod },
        dispatchStub,
      );
    });
  });
});
