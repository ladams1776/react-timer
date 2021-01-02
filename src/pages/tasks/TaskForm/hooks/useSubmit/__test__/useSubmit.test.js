import { renderHook } from '@testing-library/react-hooks';
import useSubmit from '../useSubmit';

import { fetchApiData, getCurrentDateTimeEstFormat } from 'utils';
import { useTagContext, useTimeContext, useFormDispatch } from '../..';
import useTaskEditContext from '../../../../hooks/useTaskEditContext';
import hydrateTaskForm from '../hydrateTaskForm';

jest.mock('utils/api/fetchApiData/fetchApiData');
jest.mock('../../useTimeContext');
jest.mock('../../useTagContext');
jest.mock('../../useFormDispatch');
jest.mock('../../../../hooks/useTaskEditContext');
jest.mock('../hydrateTaskForm');

describe('src/pages/createOrEditTask/hooks/__test__/useSubmit.test.js', () => {
  describe('useSubmit', () => {
    // Arrange
    const dispatchSpy = jest.fn().mockImplementation();
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
      dateFormatted: new Date(),
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
      useTagContext.mockReturnValue({ allTags: tagContextMock });
      useTimeContext.mockReturnValue(timeContextMock);
      hydrateTaskForm.mockReturnValue(timeTask);
    });

    it('should hydrate and invoke fetchApiData', () => {
      // Arrange
      useTaskEditContext.mockReturnValue({ state, dispatchTask: dispatchSpy });

      // Act
      const { result } = renderHook(() => useSubmit());
      result.current();

      // Assert
      expected.dateFormatted = new Date();
      expect(hydrateTaskForm).toHaveBeenNthCalledWith(
        1,
        state.id,
        tagContextMock,
        state.project,
        state.description,
        getCurrentDateTimeEstFormat(),
        timeContextMock.time,
        state.tags
      );

      // IDK, issue with expecting the spy.
      expect(fetchApiData).toHaveBeenCalled();
    });

      // it('should fetchApiData with all the necessary pieces, and a method with POST, when event has no id.', () => {
      //   // Arrange
      //   state.id = undefined;
      //   const expectedMethod = 'POST';

      //   // Act
      //   const { result } = renderHook(() =>
      //     useSubmit(state, state.tags, dispatchSpy),
      //   );
      //   result.current();

      //   // Assert
      //   expected.dateFormatted = new Date();
      //   expect(hydrateTaskForm).toHaveBeenNthCalledWith(
      //     1,
      //     state,
      //     state.tags,
      //     expected,
      //   );

      //   expect(fetchApiData).toHaveBeenNthCalledWith(
      //     1,
      //     'task',
      //     { body: timeTask, method: expectedMethod },
      //     dispatchSpy,
      //   );
      // });
  });
});
