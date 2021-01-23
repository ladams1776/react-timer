import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';

// target
import useSubmit from '../useSubmit';

// dependencies
import { putTaskById } from 'redux/actionCreators/actions';
import { useTagContext, useTimeContext } from '../..';
import hydrateTaskForm from '../hydrateTaskForm';

jest.mock('utils/api/fetchApiData/fetchApiData');
jest.mock('../../useTimeContext');
jest.mock('../../useTagContext');
jest.mock('../hydrateTaskForm');
jest.mock('redux/actionCreators/actions');

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn()
}));


describe('src/pages/createOrEditTask/hooks/__test__/useSubmit.test.js', () => {
  describe('useSubmit', () => {
    it('should hydrate and putTaskById', () => {
      // Arrange
      putTaskById.mockImplementation();
      const tagContextMock = {
        tags: [{ id: 1000 }],
      };
      const time = 1000;
      useTagContext.mockReturnValue({ allTags: tagContextMock });
      useTimeContext.mockReturnValue({ time });
      const expected = {
        _id: 'id',
        description: 'description',
        project: 'project',
        tags: []
      };
      hydrateTaskForm.mockReturnValue(expected);

      // Act
      const { result } = renderHook(() => useSubmit());
      act(() => result.current(expected));

      // Assert
      expect(hydrateTaskForm).toHaveBeenCalledWith(expected._id, tagContextMock, expected.project, expected.description, expect.anything(), time, expected.tags);
      expect(putTaskById).toHaveBeenCalledWith(expected);
    });
  });
});
